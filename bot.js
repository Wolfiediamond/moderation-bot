const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`##############################################################`);
  console.log("Moderation Bot started!");
  client.user.setGame("Moderating servers");
  console.log(`Currently moderating ${client.guilds.size} servers.`);
});

client.on("message", (message) => {
  if (message.content.includes("pornhub.com")) {
	message.delete();
    message.author.sendMessage("Please do not send pornographic links.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("www.pornhub.com")) {
	message.delete();
    message.author.sendMessage("Please do not send pornographic links.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("https://pornhub.com")) {
	message.delete();
    message.author.sendMessage("Please do not send pornographic links.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("fuck")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("shit")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("whore")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("bitch")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("nigga")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("slut")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("bastard")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("cunt")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("kys")) {
	message.delete();
    message.author.sendMessage("Please do not tell users to kill themself.");
  }
});
client.on("message", (message) => {
  if (message.content.includes("Fuck")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Shit")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Whore")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Bitch")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Nigga")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Slut")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Bastard")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Cunt")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Kys")) {
	message.delete();
    message.author.sendMessage("Please do not tell users to kill themself.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("FUCK")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("SHIT")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("WHORE")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("BITCH")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("NIGGA")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("SLUT")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("BASTARD")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("CUNT")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("KYS")) {
	message.delete();
    message.author.sendMessage("Please do not tell users to kill themself.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("wanker")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Wanker")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("WANKER")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("twat")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Twat")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("TWAT")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("rape")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("Rape")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("RAPE")) {
	message.delete();
    message.author.sendMessage("Please do not use bad language.");
  }
});

client.on("message", (message) => {
  if (message.content.includes("die in a hole")) {
	message.delete();
    message.author.sendMessage("Please do not tell users to kill themself.");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!credits")) {
	message.channel.send("Fully developed by Wolfie#0326");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!tutorial")) {
	message.channel.send("The Moderation Bot is a simple-to-use, yet effective bot for your Discord server. It blocks bad language, pornagraphic links/content, suspicious links/viruses (**COMING SOON**) and more! Type !credits for credits!");
  }
});

client.login("MzgwMDUyMjE3NjMxMzQyNjI1.DO4pJw.B68bdKE2XprFENVYTLOlaMo79Qc");
