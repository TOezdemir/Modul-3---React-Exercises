import { useEffect, useState } from 'react';
import { BeerAPI } from '../lib/api';

function BeerList() {
  const [beers, setBeers] = useState<BeerAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Biere!');
        }
        const data = await response.json();
        setBeers(data);
      } catch (err) {
        setError('Fehler beim Laden der Biere!');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div>Lädt...</div>; 
  }

  if (error) {
    return <div>Fehler: {error}</div>;
  }

  return (
<div className="p-32"> {/* Fügt Padding um den gesamten Inhalt hinzu */}
  {beers.map((el) => (
    <> 
      <div className="flex flex-col md:flex-row items-center mb-4"> 
        <img className="w-52 h-52 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" src={el.image_url} alt={el.name} /> 
        <div className="flex flex-col self-center text-left pl-10"> 
          <h2 className="text-2xl font-semibold mb-2">{el.name}</h2>
          <p className="mb-2">{el.tagline}</p>
          <p className="text-gray-600 mb-4">Created by: {el.name}</p> 
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-2xl w-32"> {/* Button auf volle Breite strecken */}
            Details
          </button>
        </div>
      </div>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" /> 
    </>
  ))}
</div>
    
  );
};

export default BeerList;