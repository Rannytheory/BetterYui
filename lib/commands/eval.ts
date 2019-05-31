import Command from "../core/Command";
import { Message } from "discord.js";
import { Bot } from "../core/bot";
import { inspect } from "util";
import { type } from "os";

export = class Eval extends Command
{
    private readonly rannyID: string = "200042113814102016";
    private readonly parkerID: string = "323512053862236161";

    constructor()
    {
        super("eval", 10000, ["run", "e"]);
    }

    run(msg: Message, bot: Bot, args: string[])
    {
        if(msg.author.id === this.rannyID || msg.author.id === this.parkerID)
        {
            if(msg.channel.type === "dm")
            {
                msg.channel.send("Can't do this in dm... moron");
                return;
            }
            
            try {
                const code = args.join(" ");
                let evaled = eval(code);

                if(typeof(evaled) !== "string")
                    evaled = inspect(evaled);

                msg.channel.send(this.clean(evaled), { code: 'css' });
            } 
            catch (err) {
                msg.channel.send(`\`ERROR:\`\`\`\`xl\n${this.clean(err)}\n\`\`\``)  
            }
        }
        else
            return;
    }

    clean(text: any)
    {
        if(typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }
}