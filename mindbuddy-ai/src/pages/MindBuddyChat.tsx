import { useState } from "react";
import MoodTracker from "../components/MoodTracker";
import ChatBox from "../components/ChatBox";
import DailyTip from "../components/DailyTip";
import ResourcesSection from "../components/ResourcesSection";
import { moodResponses } from "../utils/moodResponses";
import { LessonData } from "../types/lesson";

export default function MindBuddyChat() {
  const [moodSelected, setMoodSelected] = useState<string | null>(null);
  const [initialBotMessage, setInitialBotMessage] = useState<string | null>(null);
  const [externalMessage, setExternalMessage] = useState<string | null>(null);

  // ✅ Aquí guardaremos la lección para mostrarla en una Card
  const [lesson, setLesson] = useState<LessonData | null>(null);

  const handleMoodSelect = (mood: string) => {
    setMoodSelected(mood);

    const response =
      moodResponses[mood] ||
      `You selected ${mood}. Let's explore ways to improve your day 💙`;

    // Guardar mensaje para pasarlo al ChatBox
    setInitialBotMessage(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-4">
      <div className="w-full max-w-lg space-y-4">
        {/* ✅ Si NO ha elegido mood, mostramos el selector */}
        {!moodSelected ? (
          <MoodTracker onSelect={handleMoodSelect} />
        ) : (
          <>
            {/* ✅ Mensaje visual que confirma su mood */}
            <div className="bg-blue-100 p-4 rounded-lg text-center shadow">
              <p className="text-gray-700">
                You selected: <strong>{moodSelected}</strong> 💙
              </p>
            </div>

            {/* ✅ Chat principal */}
            <ChatBox
              initialMessage={initialBotMessage ?? "👋 Hi! How are you feeling today?"}
              onLessonFetched={setLesson}
              externalMessage={externalMessage}
              onExternalMessageHandled={() => setExternalMessage(null)}
            />

            {/* ✅ Si hay lección, mostramos la Card */}
            {lesson && (
              <div className="mt-4 p-4 rounded-lg shadow-lg border bg-white">
                <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                  📖 {lesson.title}
                </h3>
                <p className="text-gray-700 mt-2">{lesson.description}</p>

                {/* Lista de pasos de la lección */}
                <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                  {lesson.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ✅ Tip del día */}
            <DailyTip />

            {/* ✅ Recursos extra */}
            <ResourcesSection
              onSelectResource={(topic) => {
                setExternalMessage(topic); // ✅ Esto dispara el mensaje en ChatBox
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
