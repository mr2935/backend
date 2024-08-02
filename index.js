const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input format" });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.localeCompare(a, 'en', { sensitivity: 'base' }))[0]] : [];

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
