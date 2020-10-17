/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */

const Discord = require("discord.js");
const commands = new Discord.Collection();

module.exports = {
  CommandHandler : require(__dirname + "/CommandHandler.js"),
  Communicate    : require(__dirname + "/Communicator.js"),
  betterObject   : require(__dirname + "/betterObject.js"),
  NeuralNetwork  : require(__dirname + "/NeuralNetwork.js"),
  ChatAI         : require(__dirname + "/Chatbot.js")
};

/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */