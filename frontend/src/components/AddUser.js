import React, { useState } from "react";  // Importing React and useState from the react library
import axios from "axios";  // Importing axios library for HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate from the react-router-dom library

const AddUser = () => {
  const [name, setName] = useState(""); 
  const [ninumber, setNinumber] = useState(""); 
  const [contributions20182019, setContributions20182019] = useState("");
  const [contributions20192020, setContributions20192020] = useState("");
 // const [difference, setDifference] = useState("")     
  const navigate = useNavigate();          // Using useNavigate hook from react-router-dom library to navigate to different routes

  const saveUser = async (e) => {   // Define an asynchronous function to handle the form submission
    e.preventDefault();            // Prevent the default form submission behavior
    try {                          // Use try-catch block to catch any errors while sending HTTP request
      await axios.post("http://localhost:5000/users", {  // Send a POST request to the server API with the user data
        name,
        ninumber,
        contributions20182019,
        contributions20192020
        //difference
      });
      navigate("/");  // After successful user creation, navigate back to the home page
    } catch (error) {
      console.log(error); // Log any errors while creating the user
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={saveUser}>
          <div>
            <label>Name</label>
            <div>
              <input
              className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}  // Update the name state when the input value changes
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label>NI Number</label>
            <div>
              <input
              className="input"
                type="text"
                value={ninumber}
                onChange={(e) => setNinumber(e.target.value)} // Update the ninumber state when the input value changes
                placeholder="NI Number"
              />
            </div>
          </div>
          <div>
            <label>Contributions 2018/19</label>
            <div>
              <input
              className="input"
                type="text"
                value={contributions20182019}
                onChange={(e) => setContributions20182019(e.target.value)}   // Update the contribution 18/19 state when the input value changes
                placeholder="Contributions 2018/19"
              />
            </div>
          </div>
          <div>
            <label>Contributions 2019/20</label>
            <div>
              <input
              className="input"
                type="text"
                value={contributions20192020}
                onChange={(e) => setContributions20192020(e.target.value)}   // Update the contribution 19/20 state when the input value changes
                placeholder="Contributions 2019/20"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;  // Export the AddUser component