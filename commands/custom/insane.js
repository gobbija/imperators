const Discord = require("discord.js");
  const replies = ["<@190063576566857728> ira gejuks", "<@190063576566857728> ira vechu drazejs"]
module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  	message.replytext = Math.floor((Math.random() * replies.length) + 0); message.channel.send(replies[message.replytext]);
}
module.exports.help = {
  name: "insane"
}
