import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList.js";


function App() {
  return (
    // set up the router using BrowserRouter and define the route hierarchy
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/* Define the route for UserList component */}
          <Route path="/" element={<UserList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
