const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

var VC = message.member.voiceChannel;

if (!VC)

return message.reply("Tev vajag būt voice kanala, anton")

VC.join()

.then(connection => {

const dispatcher = connection.playFile('./audio/normies.mp3');

 dispatcher.on("end", end => {VC.leave()});

})

.catch(console.error);
}

module.exports.help = {
  name: "normies"
}
