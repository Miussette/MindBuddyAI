import { useState, useEffect } from "react";
import axios from "axios";
import BreathingExercise from "./BreathingExercise";
import QuickButtons from "./ui/QuickButtons";
import { LessonData } from "../types/lesson";
import LessonCard from "./LessonCard";

interface ChatBoxProps {
  initialMessage?: string;
  externalMessage?: string | null;
  onExternalMessageHandled?: () => void;
  onLessonFetched?: (lesson: LessonData | null) => void; // ✅ agregado
}

interface Message {
  sender: "bot" | "user";
  text: string;
  showBreathingButton?: boolean;
}

export default function ChatBox({
  initialMessage,
  externalMessage,
  onExternalMessageHandled,
  onLessonFetched,
}: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: initialMessage ?? "👋 Hi! How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const [lesson, setLesson] = useState<LessonData | null>(null);

  const sendMessage = async (text?: string) => {
    const userMessage = text ?? input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    const lowerInput = userMessage.toLowerCase();

    const topics: Record<string, string> = {
      anxiety: "anxiety",
      stress: "stress",
      relaxation: "relaxation",
      mindfulness: "mindfulness",
      breathing: "breathing",
      meditation: "meditation",
      gratitude: "gratitude",
    };

    const foundTopic = Object.keys(topics).find((key) =>
      lowerInput.includes(key)
    );

    // ✅ Caso breathing → botón
    if (foundTopic === "breathing") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "😌 I recommend a guided breathing exercise. Click below to start.",
          showBreathingButton: true,
        },
      ]);
      return;
    }

    // ✅ Caso normal con backend
    if (foundTopic && topics[foundTopic]) {
      try {
        const res = await axios.get(`http://localhost:5000/lesson/${topics[foundTopic]}`);
        const lessonData = res.data as LessonData;
        setLesson(lessonData);

        if (onLessonFetched) onLessonFetched(lessonData);

        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: `📖 Found a lesson about ${lessonData.title}.` },
        ]);
      } catch {
        // fallback sin backend
        const quickFallbacks: Record<string, string> = {
          anxiety: "🧘 Try the 4-7-8 breathing technique to calm anxiety.",
          stress: "💆 Take a mindful pause and stretch for 2 minutes.",
          relaxation: "🌸 Play soft music and breathe deeply.",
          mindfulness: "✨ Notice 5 things you can see, 4 you can touch...",
          meditation: "🕯️ Sit in silence for 1 minute focusing on your breath.",
          gratitude: "🙏 Think of 3 things you’re grateful for today.",
        };
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              quickFallbacks[foundTopic] ??
              "✨ I can help with more topics! Try asking about anxiety, stress, or mindfulness.",
          },
        ]);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "🤔 I can help you with:\n\n💙 Anxiety\n🔥 Stress\n🌸 Relaxation\n🧘 Mindfulness\n😌 Breathing Exercises\n🕯️ Meditation\n🙏 Gratitude\n🗓️ Weekly Plan\n\n✨ What would you like to explore?",
        },
      ]);
    }

    setInput("");
  };

  // ✅ Mensaje externo
  useEffect(() => {
    if (externalMessage) {
      sendMessage(externalMessage);
      if (onExternalMessageHandled) onExternalMessageHandled();
    }
  }, [externalMessage]);

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md space-y-4">
      {/* Chat principal */}
      <div className="h-60 overflow-y-auto border p-3 rounded-md">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === "user"
                ? "text-right text-green-700"
                : "text-left text-blue-700"
            }`}
          >
            <strong>{msg.sender === "user" ? "You" : "MindBuddy"}:</strong> {msg.text}
            {msg.showBreathingButton && (
              <div className="mt-2">
                <button
                  onClick={() => setShowBreathingExercise(true)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  🧘 Start Breathing Exercise
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <input
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type how you feel..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={() => sendMessage()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>

      {/* Botones rápidos */}
      <QuickButtons onSelect={sendMessage} />

      {/* ✅ Ejercicio de respiración */}
      {showBreathingExercise && (
        <BreathingExercise
          onClose={(message) => {
            setShowBreathingExercise(false);
            if (message) {
              setMessages((prev) => [...prev, { sender: "bot", text: message }]);
            }
          }}
        />
      )}

      {/* ✅ Card de lección si existe */}
      {lesson && (
        <div className="mt-4">
          <LessonCard
            lesson={lesson}
            onStartBreathing={() => setShowBreathingExercise(true)}
          />
        </div>
      )}
    </div>
  );
}
