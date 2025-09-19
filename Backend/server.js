// Import necessary packages
const express = require("express");
const cors = require("cors");

// Initialize the express app
const app = express();
const port = 8000;

// Use middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON request bodies

// In-memory data store (to act as a simple database)
let items = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

// --- API Endpoints ---

// GET /items: Retrieve all travel items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST /items: Add a new item
app.post("/api/items", (req, res) => {
  const newItem = {
    ...req.body,
    id: Date.now(), // Assign a unique ID
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PATCH /items/:id: Update an item (e.g., toggle packed status)
app.patch("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { packed } = req.body;

  const itemIndex = items.findIndex((item) => item.id === Number(id));

  if (itemIndex > -1) {
    items[itemIndex].packed = packed;
    res.json(items[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE /items/:id: Delete a specific item
app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = items.length;
  items = items.filter((item) => item.id !== Number(id));

  if (items.length < initialLength) {
    res.status(204).send(); // No content to send back
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE /items: Clear all items from the list
app.delete("/api/items", (req, res) => {
  items = [];
  res.status(204).send(); // No content
});

// Start the server
app.listen(port, () => {
  console.log(`🌴 Server is running on http://localhost:${port}`);
});
