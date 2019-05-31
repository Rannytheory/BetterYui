import Command from "../core/Command";
import { Message } from "discord.js";
import { Bot } from "../core/bot";

export = class Eval extends Command
{
    constructor()
    {
        super("sauce", 10000, ["what"]);
    }

    run(msg: Message, bot: Bot, args: string[])
    {
        
    }
}