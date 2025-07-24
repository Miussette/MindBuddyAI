interface MoodTrackerProps {
  onSelect: (mood: string) => void;
}

const moods = [
  { emoji: "😃", label: "Happy" },
{ emoji: "😌", label: "Calm" },
{ emoji: "😟", label: "Anxious" },
{ emoji: "😔", label: "Sad" },
{ emoji: "😫", label: "Stressed" },
{ emoji: "🤩", label: "Excited" },
{ emoji: "😤", label: "Frustrated" },
{ emoji: "😠", label: "Angry" },
{ emoji: "🤯", label: "Overwhelmed" },
{ emoji: "🥱", label: "Tired" },
{ emoji: "😴", label: "Sleepy" },
{ emoji: "🤗", label: "Grateful" },
{ emoji: "🥳", label: "Joyful" },
{ emoji: "😶", label: "Neutral" },
{ emoji: "🤒", label: "Unwell" },
{ emoji: "😳", label: "Embarrassed" },
{ emoji: "🤔", label: "Thoughtful" },
{ emoji: "😇", label: "Hopeful" },
{ emoji: "🤤", label: "Relaxed" },
{ emoji: "😕", label: "Confused" }
];

export default function MoodTracker({ onSelect }: MoodTrackerProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-xl animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800">How are you feeling today?</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => onSelect(m.label)}
            className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
          >
            <span className="text-4xl">{m.emoji}</span>
            <span className="text-sm text-gray-600">{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
