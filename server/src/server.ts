import express from "express";
import path from "path";
import app from "./app";

const PORT = process.env.PORT || 5001;

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "public")));

// Catch-all route to send index.html for any other path
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
