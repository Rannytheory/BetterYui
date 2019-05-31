import { Bot } from "../core/bot";
import { Message } from "discord.js";

export = (bot: Bot, msg: Message) => {
    if(msg.author.bot) return;

    console.log(msg.content);
    
    const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>\\s*|${Bot.prefix})`);
    if(!prefixRegex.test(msg.content)) return;

    const matchedPrefix = msg.content.match(prefixRegex)![1];
    const args = msg.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift();

    // Will add cooldown later.... I'm lazy okay?
    let cmd = bot.getCommands().find(val => val.getID() === command);
    if(!cmd) msg.channel.send("Command not found");
    else cmd.run(msg, bot, args);
}