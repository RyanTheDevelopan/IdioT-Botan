import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class botinfo implements IBotCommand {

    private readonly _command = "bot-info"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var embed = new Discord.RichEmbed()
            .setTitle(`Made by Ryan Cortes#0138`)
    .addField(`Amount Of Servers`, `${client.guilds.size}`) 
    .addField(`Account Created`, `December 25, 2018`) 
    .addField(`User ID`, `527118937473941504`) 
    .addField(`Status:`, `Online`) 
    .setThumbnail(`https://cdn.discordapp.com/avatars/527118937473941504/d4ff963ab77427f7eb596ab93e421f27.png`)     
    .setColor(0xff0000)
    msgObject.channel.send(embed);
        }
    }
