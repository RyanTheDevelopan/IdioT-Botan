import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class underyan implements IBotCommand {

    private readonly _command = "underyan"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.delete(0); 
            msgObject.channel.send(`Ok, so this is a server of my latest project: UndeRyan! UndeRyan is a crossover of Ryan's Life and Undertale. Ik that you're arguing about how "impossible" that is, but, hey, they're really just new characters and a bit unlike their Ryan's Life counterparts (Plus they wear clothes now) Plus, I also have someone assisting this time around: Frisky~#0001! Anyway, if you're interested in this little project, then join the server! Here's the invite: 
https://discord.gg/bEcNGk3`);
        }
    }
