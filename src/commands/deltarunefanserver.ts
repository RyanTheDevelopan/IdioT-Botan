import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class deltarunefanserver implements IBotCommand {

    private readonly _command = "deltarunefanserver"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.delete(0); 
            msgObject.channel.send(`Hey, you all. Here's another one of my servers, the Deltarune Fan Server! It's a server where you could just join and chat about Deltarune. Anyway, here's the invite:
    https://discord.gg/WPqPBkK`);
        }
    }
