const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
  if(!args[0]) return message.channel.send("tu esi padotais, nepis bobi");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Notīriju **${args[0]}** huiņas`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
