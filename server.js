const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve all static files from the root of the project
app.use(express.static(__dirname));

// Fallback to index.html (for SPA-style routes or broken links)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Game site running on http://localhost:${port}`);
});
