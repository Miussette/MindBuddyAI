import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import MindBuddyChat from "./pages/MindBuddyChat";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pantalla de bienvenida */}
        <Route path="/" element={<WelcomeScreen />} />

        {/* Pantalla de sesión con MoodTracker + Chat */}
        <Route path="/session" element={<MindBuddyChat />} />
      </Routes>
    </Router>
  );
}
