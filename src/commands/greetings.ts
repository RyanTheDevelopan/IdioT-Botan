import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "greetings"


    help (): string {

        return `The third part of "#greetings"`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)

            msgObject.delete(0); 
            msgObject.channel.send(`... 
            Well, this is the server for us two bots, Ryan The Botan, and Flamey The Flower. 
            Well, it isn't quite complete yet, but we would like it for you to stick around.`);;
        }
    }