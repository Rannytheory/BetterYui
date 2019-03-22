import { Message, Client } from "discord.js";
import { Bot } from "./bot";

export default abstract class Command 
{
    private id: string;
    private cooldown: number;
    private alias: string[];

    constructor(id: string, cooldown?: number, alias?: string[])
    {
        this.id = id;
        this.cooldown = cooldown || 3000;
        this.alias = alias || [];
    }

    public getID(): string
    {
        return this.id;
    }

    public getCooldown(): number
    {
        return this.cooldown;
    }

    public getAlias(): string[]
    {
        return this.alias;
    }

    abstract run(msg: Message, bot: Bot, args: string[]): void;
}