import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddRegistro from "./components/AddRegistro";
import EditRegistro from "./components/EditRegistro";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddRegistro />} />
      <Route exact path="/edit/:id" component={() => <EditRegistro />} />
    </div>
  );
};
export default App;
