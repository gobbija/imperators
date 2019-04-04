const Discord = require("discord.js");
const replies1 = ["<@131525294082359296> ira dirsa pisejs", "<@131525294082359296> ira idijoc", "<@131525294082359296> ira lapakais"]

module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

  	message.replytext = Math.floor((Math.random() * replies1.length) + 0); message.channel.send(replies1[message.replytext]);
}
module.exports.help = {
  name: "suklis"
}
