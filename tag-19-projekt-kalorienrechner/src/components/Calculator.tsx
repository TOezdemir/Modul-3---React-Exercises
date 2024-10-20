import { useRef } from "react"

export default function Calculator(){

    const sizeRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const weightRef = useRef<HTMLInputElement>(null)
    const activityRef = useRef<HTMLSelectElement>(null)
    const genderRef = useRef<HTMLInputElement>(null)

    const calorieintake = () =>{
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
        calorieintake()
    }

    return(
        <div className="font-sans p-6 bg-gray-100">
            <section>
            <h1 className="text-3xl font-bold mb-6 text-center">Test your daily Calorie Requirement</h1>
            <p className="text-gray-700 mb-6">To determine your daily calorie requirement, we need some information about your age, gender, weight, height and activity level. Enter this information to calculate your individual requirements.</p> 
            </section>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="sicecm" className="block text-gray-700 font-medium mb-2">Body size (in cm)</label>
                    <input type="number" id="sizecm" ref={sizeRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> 
                </div>
                <div>
                    <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
                    <input type="number" id="age" ref={ageRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                    <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">Weight</label>
                    <input type="number" id="weight" ref={weightRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/> 
                </div>
                <div>
                    <label htmlFor="activities" className="block text-gray-700 font-medium mb-2">Activity</label>
                    <select id="activities" ref={activityRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option disabled>Choose...</option>
                    <option value="1.2">Exclusively sedentary work with little or no physical activity in leisure time</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
                    <div className="flex items-center">
                        <input type="radio" id="female" name="gender" value="female" ref={genderRef} className="mr-2"/>
                        <label htmlFor="female" className="text-gray-700">Female</label> 
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="male" name="gender" value="male" ref={genderRef} className="mr-2"/> 
                        <label htmlFor="male" className="text-gray-700">Male</label>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Calculate</button>
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