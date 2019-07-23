import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class help implements IBotCommand {

    private readonly _command = "help"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var embed = new Discord.RichEmbed()
            .addField("help", "Displays this message")
            .addField("hey", "Greet meh")
            .addField("goodbye", "Wait, ur leaving?")
            .addField("8ball", "Use the 8ball.")
            .addField("diceroll", "Roll a die")
            .addField("bot-info", "Info 'bout me, Ryan The Botan.")
            .addField("purge", "Purge the streets of messages that're in ur way.")
            .addField("kicc", "Kiccs a bad boi's ass")
            .addField("ban", "Summons the Ban Buster")
            .addField("testCommand", "No reason for this command to exist, either than existing.")
            .setTitle("Ryan The Botan's Command List")
            .setAuthor(`${msgObject.author.username}`)
            .setThumbnail(`${msgObject.author.avatarURL}`)
            .setFooter("Thanks to myself for existing. Oh, and Demi's UT/DR/AU Text Box Generator too.")
            .setImage("https://cdn.discordapp.com/avatars/527118937473941504/d4ff963ab77427f7eb596ab93e421f27.png")
            .setColor(0xff0000)
            msgObject.channel.send(embed);
    }
}
