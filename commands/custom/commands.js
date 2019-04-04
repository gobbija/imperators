const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

  const embed = new Discord.RichEmbed()
    .setTitle("Botu komandas")
    .setAuthor("gobbijs", "https://imgur.com/z41ZuwN")
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor(0x00AE86)
    //.setDescription("----------------------------------------")
  //  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  //  .setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("https://i.imgur.com/9ojREJo.png")
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    //.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    .addField("Audio komandas ",
      "gay, normies, orgasm, umad")
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
    .addField("Čata komandas", "insane, gobbijs, suklis", true)
    /*
     * Blank field, useful to create some space.
     */
    //.addBlankField(true)
    //.addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

    message.channel.send({embed});
}
module.exports.help = {
  name: "commands"
}
