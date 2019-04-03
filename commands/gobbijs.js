const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

  return message.channel.send(`<@117399615594168329> ir labakais`);
}

module.exports.help = {
  name: "gobbijs"
}
