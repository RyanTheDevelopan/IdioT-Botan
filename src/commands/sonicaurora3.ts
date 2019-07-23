import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class sonicaurora3 implements IBotCommand {

    private readonly _command = "sonicaurora3"


    help (): string {

        return `The answer to the question "What is Sonic Aurora?" RIP Aurora and Qunoxic`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Rip Aurora & Qunoxic
            msgObject.delete(0); 
            msgObject.channel.send(`**GAMEPLAY**
            Sonic Aurora uses the Gmate Engine, one of the best Sonic physics engines for Game Maker 8/8.1!
            
            The gameplay in Sonic Aurora is similar to the gameplay in classic Sonic games. All characters have their own unique abilities: Espio has double jump, Tails can fly, Mighty can hammer drop... There are 8 different shields that the player can obtain, some of them being spike shield, homing attack shield, dropdash shield, fire shield...
            
            The player can collect chaos emeralds which are scattered around the game!
            
            **CREDITS**
            Sonic Aurora is made by Qunoxic & Electro Block!
            Additional assets: Overbound, Taxman, Mr Lange, Dolphman, DanielMania123
            Soundtrack: Sonic Team, Nintendo, TNH_Remix, Luan, Hinchy, Gears for Breakfast
            Play testers: Desticler, flewkey, bloodyBeesting, Quote
            
            **THANK YOU FOR SUPPORTING SONIC AURORA! :D
            DISCORD SERVER:** https://discord.gg/9zdWGTS
            Ya see, Sonic Aurora promised much to the table, but due to the creator of it being a dilenquit, it never got across it's first public demo.
            Well, I hope someday SOMEBODY would finish Aurora, even though it isn't likely.
    :shrug: Eh, ya take what ya have then, oof.`);
        }
    }
