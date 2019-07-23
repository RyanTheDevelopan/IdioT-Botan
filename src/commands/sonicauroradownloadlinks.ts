import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class sonicauroradownloadlinks implements IBotCommand {

    private readonly _command = "sonicauroradownloadlinks"


    help (): string {

        return "The downloads of the versions of Sonic Aurora that could currently be found. RIP Aurora and Qunoxic";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Rip Aurora & Qunoxic
            msgObject.delete(0); 
            msgObject.channel.send(`Oldest release that I could find so far: https://mega.nz/#!IPoxzRBR!qvxDUZV7ElKS-brdBcU3OD2jHsocidCWMgd4aNn1Kj0
But the latest release (and final): https://gamejolt.com/games/sonicaurora/362629`);
        }
    }
