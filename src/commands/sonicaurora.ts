import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class sonicaurora implements IBotCommand {

    private readonly _command = "sonicaurora"


    help (): string {

        return "The downloads of the versions of Sonic Aurora that could currently be found. RIP Aurora and Qunoxic";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Rip Aurora & Qunoxic
            msgObject.delete(0);
            msgObject.channel.send(`Ok, so what IS Sonic Aurora? Well, it's a fan-game made by Qunoxic, which attempted to expand the concept of Sonic Network Land, and make an actual story.
It promised an actual **Single Player** mode, and additions and fixes to the **Online** mode. But, well, it ultimately got scrapped and the creator left Discord, with the server being deleted too. Anyway, here's the description of it's GameJolt Page:`);
        }
    }
