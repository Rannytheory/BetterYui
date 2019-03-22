import Command from "../core/Command";
import { Message } from "discord.js";
import { Bot } from "../core/bot";

export = class Ping extends Command
{
    constructor()
    {
        super("ping");
    }

    run(msg: Message, bot: Bot, args: string[])
    {
        msg.channel.send("Pinging...")
        .then((edit: Message | Message[]) => (edit as Message)
        .edit(`Wow, your ping is \`${Math.round((edit as Message).createdTimestamp - msg.createdTimestamp).toFixed(2)}ms\``));
    }
}