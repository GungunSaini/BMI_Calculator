import { useState } from "react"
import "./Bmicalculator.css"

const Bmicalculator = () => {
    let [value, setValue] = useState({ height: "", weight: ""});
    let [bmi, setBmi] = useState();
    let [message, setMessage] = useState();

    let enterParameter = (event) => {
        setValue(
            {...value, [event.target.name] : event.target.value}
        )
    }

    let refresh = () =>{
        setValue( {
            height: "", 
            weight: ""
        }
        )
        setMessage();
        setBmi();
    }

    let calculateBMI = () => {
        if(value.weight && value.height){
            let Calculate = value.weight/Math.pow(value.height, 2);
            setBmi(Math.floor(Calculate));

            if(Calculate < 18.5){
                setMessage("Underweight");
            }else if(Calculate > 18.5 && Calculate < 24.9){
                setMessage("Normal weight");
            }else if(Calculate > 25 && Calculate < 29.9){
                setMessage("Overweight");
            }else if(Calculate > 30){
                setMessage("Obesity");
            } 
        }

        else{
            setMessage("please enter height and weight properly")
        }
    }

  return (
    <div className="bmi_calculator">
      <h3>BMI Calculator</h3>

      <label htmlFor="weight">Weight (kg)</label>
      <input type="number" placeholder="Enter weight value" id="weight" name="weight" value={value.weight} onChange={enterParameter}/>

      <label htmlFor="height">Height (m)</label>
      <input type="number" placeholder="Enter height value" id="height" name="height" value={value.height} onChange={enterParameter}/>

      <button onClick={calculateBMI} className="submit">Submit</button>
      <button onClick={refresh} className="reload">Reload</button>

      <p>Your BMI is: {bmi}</p>
      <p className="message">{message}</p>
    </div>
  )
}

export default Bmicalculator
