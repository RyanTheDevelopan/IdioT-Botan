"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "8ball";
    }
    help() {
        return "Use the 8ball";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
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
        if (args[1])
            msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else
            msgObject.channel.send(`hey bud, could ya actually ask me a question? besides, ik for a fact that i ain't askin' much here, arent i?`);
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFrRG5DLENBQUM7SUEvQ0QsSUFBSTtRQUVBLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxRQUFRLEdBQUc7WUFDWCxLQUFLO1lBQ0wsSUFBSTtZQUNKLFdBQVc7WUFDWCxLQUFLO1lBQ0wsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIseU5BQXlOO1lBQ3pOLFNBQVM7WUFDVCxXQUFXO1lBQ1gsV0FBVztZQUNYLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsNkNBQTZDO1lBQzdDLGlHQUFpRztZQUNqRyxRQUFRO1lBQ1IsNEJBQTRCO1lBQzVCLG1GQUFtRjtZQUNuRixpUEFBaVA7WUFDalAsc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQixrQkFBa0I7WUFDbEIseUJBQXlCO1lBQ3pCLFVBQVU7WUFDViw2RUFBNkU7WUFDN0UseU5BQXlOO1lBQ3pOLGtTQUFrUztZQUNsUyxnTkFBZ047U0FDbk4sQ0FBQztRQUdGLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN0RixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4R0FBOEcsQ0FBQyxDQUFDO0lBRWhKLENBQUM7Q0FFSjtBQXBETCw4QkFvREsifQ==