import { Bot } from "../core/bot";

export = (bot: Bot) => {
    console.log("I'm ready");

    (function activityThingy() {
        bot.user.setActivity(`${bot.users.random().username}'s sex doll | @ me for help`, { type: "PLAYING" });
        bot.setTimeout(activityThingy, 10000);
    })();
}