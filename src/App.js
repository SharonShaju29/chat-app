import LoginPage from "./pages/loginPage";
import ChatPage from "./pages/chatPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/user*" element={<LoginPage />} />
      <Route path="/chat*" element={<ChatPage/>}/>
      <Route path="/*" element={<div>Error 404 Not found!!!</div>}/>
    </Routes>

  );
}

export default App;
