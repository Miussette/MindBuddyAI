interface QuickButtonsProps {
  onSelect: (text: string) => void;
}

export default function QuickButtons({ onSelect }: QuickButtonsProps) {
  const quickTopics = [
    { label: "Anxiety", value: "anxiety" },
    { label: "Stress", value: "stress" },
    { label: "Weekly Plan", value: "weekly plan" },
    { label: "Breathing Exercise", value: "breathing exercise" },
    { label: "Relaxation Tips", value: "relaxation tips" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {quickTopics.map((topic) => (
        <button
          key={topic.value}
          onClick={() => onSelect(topic.value)}
          className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-blue-200 transition"
        >
          {topic.label}
        </button>
      ))}
    </div>
  );
}
