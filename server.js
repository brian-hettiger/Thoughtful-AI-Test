const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Predefined dataset
const qaData = [
    {
        question: "What does the eligibility verification agent (EVA) do?",
        answer: "EVA automates the process of verifying a patient’s eligibility and benefits information in real-time, eliminating manual data entry errors and reducing claim rejections."
    },
    {
        question: "What does the claims processing agent (CAM) do?",
        answer: "CAM streamlines the submission and management of claims, improving accuracy, reducing manual intervention, and accelerating reimbursements."
    },
    {
        question: "How does the payment posting agent (PHIL) work?",
        answer: "PHIL automates the posting of payments to patient accounts, ensuring fast, accurate reconciliation of payments and reducing administrative burden."
    },
    {
        question: "Tell me about Thoughtful AI's Agents.",
        answer: "Thoughtful AI provides a suite of AI-powered automation agents designed to streamline healthcare processes. These include Eligibility Verification (EVA), Claims Processing (CAM), and Payment Posting (PHIL), among others."
    },
    {
        question: "What are the benefits of using Thoughtful AI's agents?",
        answer: "Using Thoughtful AI's Agents can significantly reduce administrative costs, improve operational efficiency, and reduce errors in critical processes like claims management and payment posting."
    }
];

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Helper function to find the most relevant answer
function getAnswer(userQuery) {
    const queryLower = userQuery.toLowerCase();
    for (const item of qaData) {
        if (item.question.toLowerCase().includes(queryLower)) {
            return item.answer;
        }
    }
    return "I'm here to help! Please contact customer support for further assistance.";
}

// Endpoint to handle the question form submission
app.post('/ask', (req, res) => {
    const userQuestion = req.body.question;
    const response = getAnswer(userQuestion);
    res.send(`
    <h2>Thoughtful AI Customer Support Agent</h2>
    <form action="/ask" method="post">
      <label for="question">Your question:</label>
      <input type="text" id="question" name="question" value="${userQuestion}" required>
      <button type="submit">Ask</button>
    </form>
    <h3>Answer:</h3>
    <p>${response}</p>
  `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
