import { useEffect, useState } from "react";

interface TipCalculatorProps {
    billAmount?: number;
    numPeople?: number;
    serviceLevel?: "bad" | "average" | "good";
  }

const CalculateTipAndSplit= ({ billAmount = 0, numPeople = 1, serviceLevel = 'average' }: TipCalculatorProps) => {

    // Trinkgeldprozentsatz basierend auf Service-Level bestimmen
    let tipPercentage: number;
    switch (serviceLevel) {
      case "bad":
        tipPercentage = 0.02;
        break;
      case "average":
        tipPercentage = 0.1;
        break;
      case "good":
        tipPercentage = 0.2;
        break;
      default:
        tipPercentage = 0; // Falls kein gültiger Wert gewählt wurde
    }
  
    // Trinkgeldbetrag berechnen
    const tipAmount = billAmount * tipPercentage;
  
    // Gesamtbetrag (Rechnung + Trinkgeld) berechnen
    const totalAmount = billAmount + tipAmount;
  
    // Betrag pro Person berechnen
    const amountPerPerson = tipAmount / numPeople;
  
    // Eingabefelder greifen?
    const [tipAmountState, setTipAmountState] = useState<string | null>(null);
    const [totalAmountState, setTotalAmountState] = useState<string | null>(null);
    const [amountPerPersonState, setAmountPerPersonState] = useState<string | null>(null);
  
    useEffect(() => {
      setTipAmountState(tipAmount.toLocaleString(
        "de-DE",
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: "currency",
          currency: "EUR",
        }
      ));
      setTotalAmountState(totalAmount.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR",
      }));
      setAmountPerPersonState(amountPerPerson.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR",
      }));
    }, [tipAmount, totalAmount, amountPerPerson]);

      return(
    <div>
      <p>Tip amount: <span>{tipAmountState}</span></p> 
      <p>Total amount: <span>{totalAmountState}</span></p> 
      <p>Amount per person: <span>{amountPerPersonState}</span></p> 
    </div>
      )
}
  
// const calculateButton = document.querySelector("button");
// if (calculateButton) {
//     calculateButton.addEventListener("click", () => {
//       // Werte aus den Eingabefeldern abrufen
//       const billInput = document.getElementById("billAmount") as HTMLInputElement;
//       const peopleInput = document.getElementById("numPeople") as HTMLInputElement;
//       const serviceSelect = document.getElementById("serviceLevel") as HTMLSelectElement;
  
//       // Werte in Zahlen umwandeln
//       const billAmount = parseFloat(billInput.value);
//       const numPeople = parseInt(peopleInput.value, 10);
//       const serviceLevel = serviceSelect.value as "bad" | "average" | "good";
  
//       // Funktion mit den Werten als Objekt aufrufen
//       CalculateTipAndSplit({ billAmount, numPeople, serviceLevel }); 
//     });
//   }

export default CalculateTipAndSplit