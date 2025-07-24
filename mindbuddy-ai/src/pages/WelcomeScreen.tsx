import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-100 via-white to-blue-50 p-6">
      <div className="max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-700 flex items-center justify-center gap-2">
          🧠 MindBuddy AI
        </h1>

        <p className="text-gray-600 text-lg">
          Your personal AI companion for mental wellness.  
          Learn, breathe, and relax anytime, anywhere.
        </p>

        <button
          onClick={() => navigate("/session")}
          className="px-6 py-3 rounded-lg bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-all"
        >
          💬 Start your session
        </button>
      </div>
    </div>
  );
}
