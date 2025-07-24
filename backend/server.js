const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const lessons = {
  
  anxiety: {
    title: "What is anxiety?",
    description: "Anxiety is a natural body response to stress or danger.",
    steps: [
      "Identify what triggers your anxiety",
      "Practice deep breathing for 2-3 minutes",
      "Take mindful pauses during the day"
    ]
  },
  stress: {
    title: "What is stress?",
    description: "Stress is the body's reaction to any change or challenge.",
    steps: [
      "Recognize stress triggers",
      "Practice relaxation or meditation",
      "Maintain healthy routines"
    ]
  }
};

app.get("/lesson/:topic", (req, res) => {
  const topic = req.params.topic.toLowerCase();
  if (lessons[topic]) {
    res.json(lessons[topic]);
  } else {
    res.status(404).json({ message: "Lesson not found" });
  }
});

app.get("/plan", (req, res) => {
  res.json({
    Monday: "5 min breathing exercise",
    Tuesday: "10 min mindful walk",
    Wednesday: "Practice gratitude journaling",
    Thursday: "Listen to calming music",
    Friday: "Connect with a friend",
    Saturday: "Digital detox for 1 hour",
    Sunday: "Reflect & plan for the week"
  });
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
