import express from "express";
import path from "path";
import app from "./app";

const PORT = process.env.PORT || 5001;

// Serve static files and catch-all only in production (dev uses Vite on port 5173)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
