import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "8ball"


    help (): string {

        return "Use the 8ball";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            var fortunes = [
                "yes",
                "no",
                "maybe so?",
                "idk",
                "frick no",
                "maybe sometime",
                "shut the fricc up",
                "https://demirramon.com/gen/undertale_text_box.png?text=bad%20time...&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FKCSXkNf.png&charcolor=white&font=sans&asterisk=true&mode=regular.png",
                "exACTly",
                "of course",
                "yessaroni",
                `all i'll say is "yes"`,
                "frickin, heccin, no",
                "https://www.youtube.com/watch?v=oRdxUFDoQe0",
                "maybe i'll give you a **promotion** if ya help me **win the race**, 'cuz then **i'll be happy**",
                "ur gay",
                "**hope and dream**, my lad",
                "https://tenor.com/view/undertale-flowey-flowey-the-flower-virtual-hug-gif-7372330",
                "https://demirramon.com/gen/undertale_text_box.png?text=You%20color%3Dred%20idiot%20&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FnWIxZW1.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
                "uh, sorry, idk maths",
                "stop staring into my SOUL",
                "i'll poop on you",
                "piss drawer piss drawer",
                "pls dont",
                "https://tenor.com/view/undertale-indie-game-papyrus-food-eating-gif-5521250",
                "https://demirramon.com/gen/undertale_text_box.png?text=bruh&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FU3Iwr85.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
                "https://demirramon.com/gen/undertale_text_box.png?text=Don%27t%20worry%2C%20I%20still%20think%20you%27re%20a%20respectable%20person.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FX7JeGFg.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
                "https://demirramon.com/gen/undertale_text_box.png?text=%3AD&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2F9AOq5AR.png&charcolor=white&font=sans&asterisk=true&mode=regular.png"
            ];


            if (args[1]) msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else msgObject.channel.send(`hey bud, could ya actually ask me a question? besides, ik for a fact that i ain't askin' much here, arent i?`);
        
        }
        
    }