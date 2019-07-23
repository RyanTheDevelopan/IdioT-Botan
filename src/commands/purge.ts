import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class purge implements IBotCommand {

    private readonly _command = "purge"


    help (): string {

        return "(Dis is only for Admins & Mods btw) Purge the streets of messages.";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Plays "Clean-Up" with our message
            msgObject.delete();
            
            //Makes sure that the member using the command can actually manage messages
            if(!msgObject.member.hasPermission("MANAGE_MESSAGES"))
            {
                msgObject.channel.send(`Sorry ${msgObject.author.toString()} but this command is only for the ppl that could manage messages.`)
                    .then(msg => {
                        (msg as Discord.Message).delete(5000);
                    });
                    return;
            }

            //Makes sure that they have said how many messages they wanna delet
            if(!args[0]){
                msgObject.channel.send(`Sorry ${msgObject.author.toString()}, but you must & should supply & number of messages you wanna :b: deleted.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            //Converts args[o] into a number
            let numberOfMessagesToDelete = Number(args[0]);

            //Make sure args[0] is actually a number
            if(isNaN(numberOfMessagesToDelete))
            {
                msgObject.channel.send(`Sorry ${msgObject.author.toString()}, but that ain't a valid number.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }


            //Make sure the number is an integer
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);

            //Delet the desired number of messages
            msgObject.channel.bulkDelete(numberOfMessagesToDelete)
                .catch(console.error);
        }
    }
