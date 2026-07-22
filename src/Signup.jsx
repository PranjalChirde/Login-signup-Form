import { useState } from "react"
import './style.css'

export default function SignupForm({setShowLogin}) {

    let [formData, setFormData] = useState({ userName: "", email: "", password: "" })

    let handleInputChange = (event) => {
        setFormData((currDate) => {
            return {...currDate, [event.target.name] : event.target.value}
        })
    }

    let submitData = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            userName: "", 
            email: "", 
            password: ""
        })
    }

    return (
        <form onSubmit={submitData}>
            <h2>Signup</h2><br />

            <label htmlFor="userName">Username</label><br />
            <input placeholder="Enter Your UserName" type="text" id="userName" value={formData.userName} onChange={handleInputChange} name="userName"/><br /><br />

            <label htmlFor="email">email</label><br />
            <input placeholder="Enter Your email" type="email" id="email" value={formData.email} onChange={handleInputChange} name="email"/><br /><br />

            <label htmlFor="password">Enter your password</label><br />
            <input placeholder="password" type="password" id="password" value={formData.password} onChange={handleInputChange} name="password"/><br /><br />

            <button type="submit">Submit</button>

            <p>Already have an account?
                <span className="link-text" onClick={ () => setShowLogin(true)}>Login</span></p>
        </form>
    )
}