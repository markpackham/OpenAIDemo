// Code here can be intergrated into my own applications for my own AI needs
// It's faster than using Open API's own website

import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
// Readline is built into node.js
import readline from "readline";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

// Take user's input and process the standard input and output
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

// Add listener, reacts to everytime Enter/Return key is hit so "line" is changed
// Prompt user for input, have ChatGPT promt the user again and loop through process forever
userInterface.on("line", async (input) => {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  console.log(res.data.choices[0].message.content);

  userInterface.prompt();
});
