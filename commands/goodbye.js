"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "goodbye";
    }
    help() {
        return "Make me wish you farewell";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send(`${msgObject.author.toString()}`);
        msgObject.channel.sendFile(`https://demirramon.com/gen/undertale_text_box.png?text=oh%2C%20bye%20then&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FPXmUvwH.png&charcolor=white&font=sans&asterisk=true&mode=regular.png`);
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZGJ5ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9nb29kYnllLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBaUJyQyxDQUFDO0lBZEQsSUFBSTtRQUVBLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDhOQUE4TixDQUFDLENBQUM7SUFDL1AsQ0FBQztDQUNKO0FBbkJMLDhCQW1CSyJ9