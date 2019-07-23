import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class askut implements IBotCommand {

    private readonly _command = "askut"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.delete(0); 
            msgObject.channel.send(`Hey, everyone! Here's a server that's been recently passed over to me. This is a server where you could:
            * ASK Undertale/Deltarune/AU/Custom characters 
            * Just chat 
            * Roleplay with other members
This server also has a LOVE ranking system. Even though it originally was from the Flamey bot, now it's being used by MEE6 (for the meanwhile)
Anyway, that's all I'll say for this server, and, see ya there!
Invite Link: 
https://discord.gg/AjQKhqF`);
        }
    }
