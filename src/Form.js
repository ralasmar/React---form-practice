import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "",
            isFriendly: "true",
            employment: "",
            favColor: ""
        }
    )

    //most forms will have an event called onChange, set equal to this function
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        //easy to submit to wherever data needs to go since everything has been updated in state
        //submitToApi(formData)
        console.log(formData)
    }

    //adding the value property to each will have state be in control of the value instead of the input box telling the state what to be
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                placeholder="comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />   
            <input 
                type="checkbox" 
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />   
            <label htmlFor="isFriendly">Are you friendly?</label>   
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

              <label htmlFor="favColor">What is your favorite color?</label>
              <br />

              <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
              >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="indigo">indigo</option>
                <option value="violet">violet</option>
              </select>
              <br />
              <br />
              <button>Submit</button>
        </form>
    )
}