"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class kicc {
    constructor() {
        this._command = "kicc";
    }
    help() {
        return "(Dis is only for Admins & Mods btw) He protecc, he attacc, but most importantly, he kicc meanies in the bacc.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;
        msgObject.delete(0);
        if (!msgObject.member.hasPermission("KICK_MEMBERS")) {
            msgObject.channel.send(`Nice try ${msgObject.author.username}, but you don't have the permission to kicc ppl in the ass! https://cdn.discordapp.com/attachments/531267995574599711/573312689187717140/undertale_text_box.gif`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but I couldn't find that user so I could kicc their ass.  https://cdn.discordapp.com/attachments/573306812221227051/573307482894630952/undertale_text_box.gif https://cdn.discordapp.com/attachments/573306812221227051/573307856879878164/undertale_text_box.gif`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = kicc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBd0NsQyxDQUFDO0lBckNELElBQUk7UUFFQSxPQUFPLCtHQUErRyxDQUFDO0lBQzNILENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7UUFFaEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUM7WUFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsaUtBQWlLLENBQUM7aUJBQzdOLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87U0FDVjtRQUVELElBQUcsQ0FBQyxhQUFhLEVBQ2pCO1lBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEscVFBQXFRLENBQUM7aUJBQzlULElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87U0FDVjtRQUVELFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixDQUFDO0NBQ0o7QUExQ0wsdUJBMENLIn0=