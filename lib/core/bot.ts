import { Client, Message, Collection } from "discord.js";
import Command from "./Command";
import * as utils from "./../utils";
import { join } from "path";

export class Bot extends Client
{
    public static readonly prefix = "by.";

    private commands: Collection<string, Command>;
    private alias: Collection<string, string>;

    constructor()
    {
        super({ 
            disableEveryone: true
        });

        this.commands = new Collection();
        this.alias = new Collection();

        Promise.all([this.registerCommands(), this.addAliases()]).then(() => this.registerEvents());
    }

    private async registerCommands()
    {
        let files = await utils.readDir(join(__dirname, "..", "commands"));
        files.forEach(file => {
            //@ts-ignore
            let cmdObj = require(join(__dirname, "..", "commands", file));
            let command: Command = new cmdObj();
            this.commands.set(command.getID(), command);
        });

        console.log(`Registered ${this.commands.size} commands`);
    }

    private async addAliases()
    {
        let files = await utils.readDir(join(__dirname, "..", "commands"));
        files.forEach(file => {
            //@ts-ignore
            let cmdObj = require(join(__dirname, "..", "commands", file));
            let command: Command = new cmdObj();
            command.getAlias().forEach(alias => this.alias.set(alias, command.getID()));
        });

        console.log(`Registered ${this.alias.size} aliases`);
    }

    private async registerEvents()
    {
        let files = await utils.readDir(join(__dirname, "..", "events"));
        files.forEach(file => {
            //@ts-ignore
            let eventFunc: Function = require(join(__dirname, "..", "events", file));
            this.on(file.split('.')[0], eventFunc.bind(null, this));
        });
    }

    public getCommands()
    {
        return this.commands;
    }

    public getAliases()
    {
        return this.alias;
    }
}

export default new Bot();