import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class kicc implements IBotCommand {

    private readonly _command = "ban"


    help (): string {

        return "(Dis is only for Admins & Mods btw) RYAN! USE BAN BUSTER!!";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let banLog = `${msgObject.author.username}: ${suppliedReason}`;

            msgObject.delete(0); 

            if(!msgObject.member.hasPermission("BAN_MEMBERS")){
                msgObject.channel.send(`Nice try ${msgObject.author.username}, but you don't have the permission to weild the Ban Buster!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            if(!mentionedUser)
            {
                msgObject.channel.send(`Sorry ${msgObject.author.username}, but I couldn't find that user so I could use the Ban Buster on 'em.  https://cdn.discordapp.com/attachments/573306812221227051/573307482894630952/undertale_text_box.gif https://cdn.discordapp.com/attachments/573306812221227051/573307856879878164/undertale_text_box.gif`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            msgObject.guild.member(mentionedUser).ban(banLog)
                .then(console.log)
                .catch(console.error)
        }
    }
