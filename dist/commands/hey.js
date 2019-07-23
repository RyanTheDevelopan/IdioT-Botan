"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "hey";
    }
    help() {
        return "Make me greet you";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send(`${msgObject.author.toString()}`);
        msgObject.channel.sendFile(`https://demirramon.com/gen/undertale_text_box.png?text=oh%2C%20hello%20there&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2F9AOq5AR.png&charcolor=white&font=sans&asterisk=true&mode=regular.png`);
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2hleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLFdBQVc7SUFBaEM7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQWlCakMsQ0FBQztJQWRELElBQUk7UUFFQSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFHekUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxpT0FBaU8sQ0FBQyxDQUFDO0lBQ2xRLENBQUM7Q0FDSjtBQW5CTCw4QkFtQksifQ==