import LoginPage from "./pages/loginPage";
import ChatPage from "./pages/chatPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/user*" element={<LoginPage />} />
      <Route path="/chat*" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
