"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
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
            .setColor(0xff0000);
        msgObject.channel.send(embed);
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQWlDdEMsQ0FBQztJQTlCRyxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQyxRQUFRLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDO2FBQ3pDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO2FBQzVCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7YUFDeEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQzthQUNuQyxRQUFRLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQzthQUNsQyxRQUFRLENBQUMsVUFBVSxFQUFFLGdDQUFnQyxDQUFDO2FBQ3RELFFBQVEsQ0FBQyxPQUFPLEVBQUUsa0RBQWtELENBQUM7YUFDckUsUUFBUSxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQzthQUN6QyxRQUFRLENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDO2FBQ3pDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsNERBQTRELENBQUM7YUFDckYsUUFBUSxDQUFDLCtCQUErQixDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsZ0ZBQWdGLENBQUM7YUFDM0YsUUFBUSxDQUFDLDRGQUE0RixDQUFDO2FBQ3RHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUFuQ0QsdUJBbUNDIn0=