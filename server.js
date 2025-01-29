import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "makindetobiloba9@gmail.com", // my registered HNG Slack email
    current_datetime: new Date().toISOString(), // ISO 8601 timestamp
    github_url: "https://github.com/yourusername/your-repo", // Your repo URL
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
