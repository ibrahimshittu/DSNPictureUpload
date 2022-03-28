import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { context } from "./context/context";

function App() {
  const { user } = useContext(context);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/login" element={user ? <Home/> : <LoginPage />} />
            <Route path="/signup" element={user ? <Home/> : <SignupPage />} />
            <Route path="/" element={user ? <Home /> : <LoginPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
