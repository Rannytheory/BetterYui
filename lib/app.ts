//@ts-ignore
require('dotenv').config();
import bot from "./core";

bot.login(process.env.TOKEN);