import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class yoshicult implements IBotCommand {

    private readonly _command = "yoshicult"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.delete(0); 
            msgObject.channel.send(`Well, so this is a Yoshi Cult
Here you get to worship Yoshis if you do want a Yoshi religion (for some reason)
I just don't feel like talking much about this now so here's the invite:
https://discord.gg/XpMEtS8`);
        }
    }
