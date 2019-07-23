import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class kicc implements IBotCommand {

    private readonly _command = "kicc"


    help (): string {

        return "(Dis is only for Admins & Mods btw) He protecc, he attacc, but most importantly, he kicc meanies in the bacc.";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

            msgObject.delete(0); 

            if(!msgObject.member.hasPermission("KICK_MEMBERS")){
                msgObject.channel.send(`Nice try ${msgObject.author.username}, but you don't have the permission to kicc ppl in the ass! https://cdn.discordapp.com/attachments/531267995574599711/573312689187717140/undertale_text_box.gif`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            if(!mentionedUser)
            {
                msgObject.channel.send(`Sorry ${msgObject.author.username}, but I couldn't find that user so I could kicc their ass.  https://cdn.discordapp.com/attachments/573306812221227051/573307482894630952/undertale_text_box.gif https://cdn.discordapp.com/attachments/573306812221227051/573307856879878164/undertale_text_box.gif`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            msgObject.guild.member(mentionedUser).kick(kickLog)
                .then(console.log)
                .catch(console.error)
        }
    }
