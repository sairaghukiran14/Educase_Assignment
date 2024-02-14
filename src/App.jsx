import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Components/Welcome";
import CreateAccount from "./Components/CreateAccount";
import SignIn from "./Components/SignIn";
import AccountSettings from "./Components/AccountSettings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
