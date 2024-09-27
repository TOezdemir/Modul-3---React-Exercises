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
    <div>
      {beers.map((el) => (
        <div className="flex">
            <div className="flex flex-row">
                <img className="w-72 h-72 object-cover" src={el.image_url} alt={el.name} />    
            </div>
            <div className="flex flex-col">
                <h2>{el.name}</h2>
                <p>{el.tagline}</p>
                <p>Created by: {el.name}</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-2xl">Details</button>   
            </div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          </div>
      ))}
    </div>
  );
};

export default BeerList;