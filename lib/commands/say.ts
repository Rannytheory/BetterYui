import Command from "../core/Command";
import { Message } from "discord.js";
import { Bot } from "../core/bot";

export = class Eval extends Command
{
    private readonly rannyID: string = "200042113814102016";
    private readonly parkerID: string = "323512053862236161";

    constructor()
    {
        super("say", 1000, ["s"]);
    }

    run(msg: Message, bot: Bot, args: string[])
    {
        if(msg.author.id === this.rannyID || msg.author.id === this.parkerID)
        {
            const clientID = args.shift();
            const message = args.join(" ");
            
            bot.users.find(u => u.id == clientID).send(message).catch(console.log);
        }
        else
            return;
    }
}