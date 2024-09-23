import { useState } from "react"

function InputForm(){
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event)=>{
        event.preventDefault()
    }



    return(
        <form onSubmit={handleSubmit} className="text-center">
            <input onChange={(event)=> {setName(event.target.value)}} type="text" placeholder="Vorname" id="name" className="border-solid border-2"/>
            <input onChange={(event)=> {setlastName(event.target.value)}} type="text" placeholder="Nachname" id="lastName" className="border-solid border-2" />
            <input onChange={(event)=>{setEmail(event.target.value)}} type="text" placeholder="Email" id="email" className="border-solid border-2"/>
           <div className=" m-4 ml-40 flex flex-col text-left">
                <label htmlFor="name">Vorname: {name}</label>
                <label htmlFor="surname">Nachname: {lastName}</label>
                <label htmlFor="email">Email: {email}</label>
            </div> 
        </form>
        
    
        
    )
}

export default InputForm