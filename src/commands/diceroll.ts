import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class diceroll implements IBotCommand {

    private readonly _command = "diceroll"


    help (): string {

        return "Roll a die";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var roll = Math.floor(Math.random() * 6) + 1;
            msgObject.channel.send(`Congrats ${msgObject.author.toString()}, you rolled a ${roll}!`);
        }
    }
