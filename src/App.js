import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard";
import FooterComp from "./routes/comp/FooterComp";


import ScrollToTop from "./ScrollToTop";


const App = () => {
  return (
    <AuthProvider>
      <Router>

        <ScrollToTop />
        <div className="App">
         

          
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />


          
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/DashBoard" component={DashBoard} />
          



          
          
  

         
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
