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
        alert('Bitte gib deinen Namen und dein Geburtsdatum ein.');
      }
    };
  
    return (
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} /> {/* Unkontrollierter Input mit ref */}
        </div>
        <div>
          <label htmlFor="geburtstag">Geburtstag:</label>
          <input type="date" id="geburtstag" ref={geburtstagRef} /> {/* Unkontrollierter Input mit ref */}
        </div>
        <button onClick={geburtstagPruefen}>Prüfen</button>
      </div>
    );
  };
  
  export default BirthdayForm