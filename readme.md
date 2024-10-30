# Thoughtful AI Customer Support Agent

This project is a simple customer support chatbot built in **Node.js** using **Express**. The chatbot assists users by answering predefined questions about Thoughtful AI's services with hardcoded responses.

## Project Objective

You are working on behalf of Thoughtful AI to create a customer support chatbot that can:
- Accept user input and respond conversationally.
- Retrieve relevant answers from a predefined dataset of questions about Thoughtful AI.
- Provide fallback responses for questions outside the predefined dataset.

## Key Features

- **Question Answering**: Responds to specific, predefined questions about Thoughtful AI's services.
- **Fallback Handling**: Provides a general response for any unrecognized question.
- **Web Interface**: Simple web-based interface served by an Express server.

## Predefined Dataset

The chatbot answers the following sample questions:
- **"What does the eligibility verification agent (EVA) do?"**
- **"What does the claims processing agent (CAM) do?"**
- **"How does the payment posting agent (PHIL) work?"**
- **"Tell me about Thoughtful AI's Agents."**
- **"What are the benefits of using Thoughtful AI's agents?"**

For all other questions, the chatbot responds with a general message to contact customer support.

## Project Structure

- **server.js**: Main server file for the Express application, contains logic to handle questions and display responses.
- **public/index.html**: Frontend interface with a simple form to ask questions.

## Prerequisites

- **Node.js** and **npm** installed on your machine.

## Installation and Setup

1. **Clone the Repository**  
   Clone the repository and navigate into the project folder:
   ```bash
   git clone https://github.com/your-username/thoughtful-ai-support-agent.git
   cd thoughtful-ai-support-agent
