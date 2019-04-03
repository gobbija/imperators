const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  
  return message.channel.send(`<@492612356799594497> ira pedolacis`);
}

module.exports.help = {
  name: "niks"
}
