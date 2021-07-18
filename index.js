const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

client.build();

module.exports = client; //;-;

client.on('guildCreate', guild => {client.channels.cache.get("866140466411995176").send(`✅ **Join Server**: ${client.guilds.cache.size}🔠 **Server Name**: ${guild.name}👑 **Server Owner**: ${guild.owner}🆔 **Server Id**: ${guild.id}👥 **Member Count**: ${guild.memberCount}**`)});/////////////////////////////////////////////  client.on('guildDelete', guild => { client.channels.cache.get("866140466411995176").send(`❎ **Lift Server**: ${client.guilds.cache.size}🔠 **Server Name**: ${guild.name}👑 **Server Owner**: ${guild.owner}🆔 **Server Id**: ${guild.id}👥 **Member Count**: ${guild.memberCount}**`)});
