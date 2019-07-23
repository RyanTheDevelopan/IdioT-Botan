import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "ignoretheflower"


    help (): string {

        return `The fifth part of "#greetings"`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)

            msgObject.delete(0); 
            msgObject.channel.send(`... 
*Whispers to the member* Ignore the flower.
*Back in normal tone & such* Anyway, so we highly advice you to read the rules channel. So, see ya (I guess)`);;
        }
    }