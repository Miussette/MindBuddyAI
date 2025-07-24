🧠 MindBuddy AI

MindBuddy AI is a mental wellness companion designed to help users manage their emotions through:
✅ Guided breathing exercises
✅ Quick tips for anxiety, stress, and mindfulness
✅ A mood tracker with contextual responses
✅ A chatbot that can answer wellness-related questions
✅ Extra resources like meditation, gratitude journaling, and relaxing music

🚀 Built with React + TypeScript + TailwindCSS, ready to connect with Kiro AI for intelligent responses.

✨ Features

📝 Mood Tracker → Choose how you feel and get tailored responses.

💬 ChatBox → Interactive chatbot that responds empathetically and gives quick tips.

🧘 Breathing Exercises → Visual guided breathing with a dynamic circle.

📚 Extra Resources → Meditation, gratitude journal, relaxing playlists.

🔄 Fallback offline mode → Even without AI integration, it provides basic tips.

🌐 Multi-language support → Responds in English or Spanish based on user input.

🛠️ Tech Stack

Frontend: React, TypeScript, TailwindCSS

Backend (coming soon): Node.js + Express + Kiro API integration

State Management: React Hooks (useState, useEffect)

Styling: TailwindCSS

API Client: Axios

📂 Project Structure

├── .kiro/
│   ├── specs.json
│   ├── hooks.json
│   ├── steering.json

mindbuddy-ai/
├── src/
│   ├── components/
│   │   ├── ChatBox.tsx        # Main chatbot logic
│   │   ├── MoodTracker.tsx    # Mood selection grid
│   │   ├── BreathingExercise.tsx
│   │   ├── DailyTip.tsx       # Daily wellness tip
│   │   ├── LessonCard.tsx     # Displays detailed lessons
│   │   ├── ResourcesSection.tsx # Extra resources
│   ├── pages/
│   │   ├── WelcomeScreen.tsx  # Landing page
│   │   ├── MindBuddyChat.tsx  # Main chat session page
│   ├── utils/
│   │   ├── moodResponses.ts   # Predefined mood-based responses
│   ├── types/
│   │   ├── lesson.ts          # Lesson data types
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
└── backend/ (coming soon)

🚀 Getting Started

✅ 1. Clone the repo
git clone https://github.com/yourusername/mindbuddy-ai.git
cd mindbuddy-ai

✅ 2. Install dependencies
npm install

✅ 3. Run the app
npm start
The app will be available at http://localhost:3000

🔜 Upcoming Features

🔗 AI Integration with Kiro → More natural and dynamic responses

🗂️ Backend with Node.js + Express → API for lessons and chat history

📈 Analytics & Mood Trends → Track your emotional history

☁️ Deploy on Vercel / Netlify

📸 Preview

(add screenshots or gifs later, e.g. mood tracker + chat)

🤝 Contributing

Fork the repo

Create a new branch feature/amazing-feature

Commit your changes

Push and create a PR

📄 License

This project is licensed under the MIT License – feel free to use it for your own wellness apps!

