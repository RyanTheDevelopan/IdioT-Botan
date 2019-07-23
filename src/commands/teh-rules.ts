import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "teh-rules"


    help (): string {

        return `The rules, obviously.`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)

            msgObject.delete(0); 
            msgObject.channel.send(`So! the rules, what are they? Well, these're the rules, shut up, and follow them.`);;
            msgObject.channel.send(`**The Rules**:
Rule 1: No Major Cussing (This includes doing it a lot. It's fine if you do it like once.) Flamey: Fuck you
Rule 2: No rude/offensive comments.
Rule 3: Post in the correct channels.
Rule 4: Don't @everyone. Me, Flamey, and the admins are excluded from this.
Rule 5: If there is a problem, ping either Chamey or Ryan. Don't go pinging some random folk who are trying to enjoy their evening meal. However, if it's a small problem and the Creator isn't online try to take care of it yourself. 'Sides, it isn't that hard.
Rule 6: Hey, don't bully. Everyone hates a bully. *Flamey doesn't know what to do with his "life" anymore*
Rule 7: No Role Abuse: Don't abuse your roles, 'cuz if you do, Imma remove
that role and give you a warning
Rule 8 (And the most important rule of all): No getting to 3 warnings: Don't get to 3 warnings, kids
'cuz if you do
*Eye glows blue*
**YOU'RE GONNA BE IN FOR A BAD TIME**`);;
        }
    }