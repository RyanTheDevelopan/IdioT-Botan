import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "rules"


    help (): string {

        return `The first part of "#teh-rules"`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)

            msgObject.delete(0); 
            msgObject.channel.send("Hey kiddo. Welcome to the server! Now you may be wondering:");;
        }
    }