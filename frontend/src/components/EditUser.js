// Import necessary libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// Define the EditUser component
const EditUser = () => {
  // Define state variables using the useState hook
  const [name, setName] = useState(""); 
  const [ninumber, setNinumber] = useState(""); 
  const [contributions20182019, setContributions20182019] = useState("");
  const [contributions20192020, setContributions20192020] = useState("");
  // Access the navigate and id variables from the react-router-dom library
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch user data by id on component mount using the useEffect hook
  useEffect(() => {
    getUserById();
  }, []);

  // Define an async function to fetch user data by id
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    // Update the state variables with the retrieved data
    setName(response.data.name);
    setNinumber(response.data.ninumber);
    setContributions20182019(response.data.contributions20182019);
    setContributions20192020(response.data.contributions20192020);
  };

  // Define an async function to update user data on form submission
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        ninumber,
        contributions20182019,
        contributions20192020
      });
      // Navigate to the home page after the update is successful
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Return the JSX for the EditUser component
  return (
    <div className="container">
      <div>
        <form onSubmit={updateUser}>
          <div>
            <label>Name</label>
            <div>
              <input
              className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
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
                onChange={(e) => setNinumber(e.target.value)} 
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
                onChange={(e) => setContributions20182019(e.target.value)}   
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
                onChange={(e) => setContributions20192020(e.target.value)}  
                placeholder="Contributions 2019/20"
              />
            </div>
          </div>
          <div>
            <div>
              <button type="submit" className="button">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the EditUser component as the default export
export default EditUser;