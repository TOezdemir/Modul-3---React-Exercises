import { useRef } from "react"

export default function Calculator(){

    const sizeRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const weightRef = useRef<HTMLInputElement>(null)
    const activityRef = useRef<HTMLSelectElement>(null)
    const genderRef = useRef<HTMLInputElement>(null)

    const kalorienbedarf = () =>{
        const size = parseFloat(sizeRef.current!.value)
        const age = parseInt(ageRef.current!.value, 10)
        const weight = parseFloat(weightRef.current!.value)
        const activity = parseFloat(activityRef.current!.value)
        const gender = genderRef.current!.value

        let bmr: number
        if(gender === "female"){
            bmr = 655.1 + 9.6 * weight + 1.8 * size - 4.6 * age
        } else{
            bmr = 66.47 + 13.7 * weight + 5 * size - 6.8 * age
        }

        const bmrkj: number = bmr * 4.4
        const tdee = bmr * activity
        const tdeekj = (bmr * activity) * 4.4

        document.getElementById("bmr")!.textContent = bmr.toFixed(2)
        document.getElementById("tdee")!.textContent = tdee.toFixed(2)
        document.getElementById("bmrkj")!.textContent = bmrkj.toFixed(2)
        document.getElementById("tdeekj")!.textContent = tdeekj.toFixed(2)
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        kalorienbedarf()
    }

    return(
        <div>
            <section>
               <h1>Test your daily Calorie Requirement</h1>
                <p>To determine your daily calorie requirement, we need some information about your age, gender, weight, height and activity level. Enter this information to calculate your individual requirements.</p> 
            </section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="sicecm">Body size (in cm)</label>
                    <input type="number" id="sizecm" ref={sizeRef} /> 
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" ref={ageRef}/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" id="weight" ref={weightRef} /> 
                </div>
                <div>
                    <label htmlFor="activities">Activity</label>
                    <select id="activities" ref={activityRef}>
                    <option disabled>Choose...</option>
                    <option value="1.2">Exclusively sedentary work with little or no physical activity in leisure time</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <div>
                        <input type="radio" id="female" name="gender" value="female" ref={genderRef}/>
                        <label htmlFor="female">Female</label> 
                    </div>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" ref={genderRef}/> 
                        <label htmlFor="male">Male</label>
                    </div>
                </div>
                <button type="submit">Calculate</button>
                <table>
                    <tr>
                        <th> </th>
                        <th>kcal</th>
                        <th>kj</th>
                    </tr>
                    <tr>
                        <td>Basal Metabolic Rate</td>
                        <td><span id="bmr"></span></td>
                        <td><span id="bmrkj"></span></td>
                    </tr>
                    <tr>
                        <td>Total Daily Energy Expenditure</td>
                        <td><span id="tdee"></span></td>
                        <td><span id="tdeekj"></span></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}