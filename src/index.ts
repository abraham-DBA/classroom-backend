import express from "express";
import subjectRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

const FRONTEND_URL = process.env.FRONTEND_URL;

if (!FRONTEND_URL) {
    console.warn('FRONTEND_URL not set, CORS may block requests');
  }
    app.use(cors({
      origin: FRONTEND_URL || false,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true
}));

app.use(express.json());

app.use('/api/subjects', subjectRouter)

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
