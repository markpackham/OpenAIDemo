import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
// readline is built into node.js
import readline from "readline";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

// take user's input and process the standard input and output
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello ChatGPT" }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  });
