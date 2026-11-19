import weatherSnap from "../assets/projects/weatherapp.png";
import todoSnap from "../assets/projects/todoapp.png";
import expenseSnap from "../assets/projects/expense-tracker-app.png";
import paragonColSnap from "../assets/projects/paragon-college.png";

export const projects = [
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Search any city and see current conditions. Handles loading, empty and error states.",
    image: weatherSnap,
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "",
    repoUrl: "https://github.com/Funexlite/weather-app",
  },
  {
    id: "todo-app",
    title: "To-Do App",
    description:
      "Add, complete and delete tasks, filter by status, and keep them saved between visits.",
    image: todoSnap, 
    tags: ["HTML", "CSS", "JavaScript", "localStorage"],
    liveUrl: "",
    repoUrl: "https://github.com/Funexlite/todo-app",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Log expenses, filter by month and category, and see spending in a chart.",
    image: expenseSnap,
    tags: ["React", "TypeScript", "Recharts", "Context"],
    liveUrl: "",
    repoUrl: "https://github.com/Funexlite/expense-tracker",
  },
  {
    id: "paragon-colleges",
    title: "Paragon Int'l College",
    description:
      "Optimized with lightweight caching, SSL secutrity, and mobile-first design",
    image: paragonColSnap,
    tags: ["HTML", "CSS", "JavaScript", "Wordpress"],
    liveUrl: "https://paragoncolleges.com",
    repoUrl: "",
  },
];
