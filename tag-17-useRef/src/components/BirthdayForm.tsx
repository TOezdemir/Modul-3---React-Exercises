import { useRef } from "react";

function BirthdayForm() {
    const nameRef = useRef<HTMLInputElement>(null);
    const geburtstagRef = useRef<HTMLInputElement>(null);
  
    const geburtstagPruefen = () => {
      const name = nameRef.current?.value;
      const geburtstag = geburtstagRef.current?.value;
  
      if (name && geburtstag) {
        const heute = new Date();
        const geburtsdatum = new Date(geburtstag);
  
        if (
          heute.getDate() === geburtsdatum.getDate() &&
          heute.getMonth() === geburtsdatum.getMonth()
        ) {
          alert(`Alles Gute zum Geburtstag, ${name}!`);
        } else {
          alert(`HEUTE IST NICHT DEIN GEBURTSTAG, ${name}!!!!! >:]`);
        }
      } else {
        alert("Bitte gib deinen Namen und dein Geburtsdatum ein.");
      }
    };
  
    return (
        <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm"> 
                <h2 className="text-2xl font-semibold mb-4 text-center">Prüfe hier nach deinem Geburtstag!
                <p className="text-sm mt-1">Alle die heute Geburtstag haben, haben besonders Glück, diese Seite gefunden zu haben!</p>
                </h2>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <input type="text" id="name"
                    ref={nameRef} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                />
                </div>
                <div className="mb-6">
                    <label htmlFor="geburtstag"
                    className="block text-gray-700 font-medium mb-2">Geburtstag:</label>
                    <input type="date" id="geburtstag" 
                    ref={geburtstagRef} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-6 text-center">
                <button 
                onClick={geburtstagPruefen} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Prüfen 
                </button>
                </div>
            </div>
        </div>
    );
};
  
export default BirthdayForm