import "dotenv/config";
import { generateFicheWithGemini } from "./ai";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");

app.use((_req, res, next) => {
  const origin = _req.headers.origin;
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "http://127.0.0.1:5175",
  ];

  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Vary", "Origin");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

  if (_req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: "20mb" }));


app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "assistant-pedagogique-backend" });
});
app.post("/api/generate-fiche", async (req, res) => {
  try {
    const request = req.body;

    console.log("Demande de fiche reçue :", {
      className: request.className,
      subject: request.subject,
      learningSituation: request.learningSituation,
      sequence: request.sequence,
      lesson: request.lesson,
      domain: request.domain,
      notion: request.notion,
      courseTextLength: request.courseText?.length ?? 0,
      imageCount: request.activityImages?.length ?? 0,
      teacherInstruction: request.teacherInstruction,
    });

    const fiche = await generateFicheWithGemini(request);

    console.log("Fiche générée par Gemini.");
    res.json(fiche);
  } catch (error) {
    console.error("Erreur génération Gemini :", error);
    res.status(500).json({
      error: error instanceof Error
        ? error.message
        : "Erreur lors de la génération de la fiche.",
    });
  }
});

app.use(express.static(distPath));
app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
