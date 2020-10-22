# Discord.Plus
---
> Discord Plus is a Wrapper for Discord.JS which utilizes Bot communications using Socket.IO. Easily communicate with other bots using Discord.Plus. Discord.Plus also has a built in command handler, machine learning and chat AI to help you make your bot easily.
---
## How To Use
---
### Command Handler Usage
---
- `set(name, value)`<br />
> To set a command with `value` as value and `name` as the name.
- `get(name)`<br/>
> To return a command's `value` with `name` as name.
- `remove(name)`<br />
> To remove a command with `name` as name.
- `has(name)`<br />
> To know does a command with `name` as name is exist in the Class or no.
- `getAll()`<br />
> To get all commands' `name` and `value` in Map.
- `getAllNames()`<br />
> To get all commands' `name` in an Array.
- `getAllValues()`<br />
> To get all commands' `value` in an Array.
---
### Communicate Usage
---
- `on(event, callback)`
> To fire `callback` function when the `event` event got fired.
- `sendMessage(object)` / `sendMessage({ id: "The Bot Receiver's ID", message: "Your Message" })`
> To send message to other bot. Note: It will return an Object after the server send it to other bot.
- `blockUser(id)`
> To block a bot with `id` as ID so the bot cannot send message to your bot. Note: It will not stored into any database.
- `unblockUser(id)`
> To unblock a bot with `id` as ID.
- `blockedUsers()`
> To get all IDs of blocked users.
---
### betterObject Usage
---
- `Object.prototype.forEach(callback)`
> To calls a function once for each item in an Object, in order.
- `Object.prototype.push(object)`
> To add new item to an Object.
- `Object.prototype.splice(index, howmany, replacewith)`
> To add/remove items from an Object, and return modified Object.
---
### NeuralNetwork Usage
---
- `train(iterations, data)`
> To train your AI with data `iterations`x times.
- `activate(input)`
> To see your AI's answer of `input`.
---
### ChatBot Usage
---
- `trainData(arrayOfData)`
> Gives the ai the required data to reply to users.
- `getPrediction(string)`
> Get string prediction from trained data.
- `getResult(string)`
> Get all results and scores from all data. This can be used to find the most dominant one.
---
### Command Handler Example
---
```js
const { CommandHandler } = require("@evodev/discord.plus");
const { Client }         = require("discord.js");
const prefix             = "!";
const handler            = new CommandHandler();

handler.set("say", {
  name: "say",
  run: async (client, message, args) => {
    return message.channel.send(args.join(" "));
  }
});

client.on("message", async message => {
  const args = msg.content
    .trim()
    .slice(prefix.length)
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.charAt(0) !== prefix) return;
  // Running command based on input
  if (!handler.has(cmd)) return;
  handler.get(cmd).run(client, message, args);
});
```
---
### Communicate Example
---
```js
let BetterDiscord = require("@evodev/discord.plus");
let cBD           = new BetterDiscord.Communicate("your_bot_token"); //you can put DiscordClient object here tho.

cBD.on("ready", () => {
  cBD.on("message", async res => {
    console.log(`${res.user.id}: ${res.message.content}`);
    let msgRes = await cBD.sendMessage({ message: "Received your message dude!", id: res.user.id });
    //you can do whatever you want with the msgRes object!
  });
});
```
---
### NeuralNetwork Example
---
```js
let { NeuralNetwork } = require("@evodev/discord.plus");
let ML                 = new NeuralNetwork();

ML.train(10000, [
	{ inputs: [0,0], outputs: [0] },
	{ inputs: [0,1], outputs: [0] },
	{ inputs: [1,0], outputs: [0] },
	{ inputs: [1,1], outputs: [1] }
]);

console.log(ML.activate([0,0])); // ~0 (0.01214291222508886)
console.log(ML.activate([0,1])); // ~0 (0.08100696632854297)
console.log(ML.activate([1,0])); // ~0 (0.07793351045035582)
console.log(ML.activate([1,1])); // ~1 (0.8780115291725155)
```
---
### betterObject Example
---
```js
require("@evodev/discord.plus").betterObject();

let object = { i: 0, o: 1 };

object.push({ k: 2 }); //{ i: 0, o: 1, k: 2 };

object.forEach((k,v) => {
  console.log(`${k} = ${v}`);
}); //1 = 0, o 1, k = 2

object.splice(2,2); //{ i: 0 }
```
---
---
### ChatBot Example
---
```js
const { ChatAI } = require("@evodev/discord.plus");
const chatbot = new ChatAI();

const data = [
  { input: "Hey there!"                          , output: "Hello!"                              },
  { input: "Thanks for downloading discord.plus!", output: "No problem!"                         },
  { input: "Enjoying using the lib?"             , output: "considering support us by donating!" }
]

// Return: considering support us by donating!
ai.getPrediction("Enjoying the lib?")

// Return an array of predictions and scores.
ai.getResult("thanks for the downloads!")
```
---
## Support
---
- [Discord Server](https://discord.gg/pes8Wbu)
---
## Developer
---
- Gaia#7541 (Discord)
- Hyp3r#0001 (Discord)
- Odd Stranger#7957 (Discord)
---
## Want to support us?
---
- Gaia's PayPal: nekomaru76
---
## Note
---
- You cannot distribute this library. You only can download and use it.
- You cannot edit the library and then distribute it without All Developers' permission of this Library. You only can use it.
- Don't try to put your DiscordClient object into sendMessage function.
---
## Copyright (c) EvoDev Team, Inc - All Rights Reserved
---
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit [the site](https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt).
 * Written by Gaia <careday17@gmail.com>, October 2020.
 ---
 