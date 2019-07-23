import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class sonicaurora4 implements IBotCommand {

    private readonly _command = "sonicaurora4"


    help (): string {

        return "The downloads of the versions of Sonic Aurora that could currently be found. RIP Aurora and Qunoxic";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Rip Aurora & Qunoxic
            msgObject.delete(0);
            msgObject.channel.send(`Oh yeah, the invite's invalid on purpose (mainly on the reason that I already told you: Qunoxic left Discord causing the server to commit yeetus deletus)`);
        }
    }
