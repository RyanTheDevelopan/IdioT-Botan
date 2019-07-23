import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class sonicaurora2 implements IBotCommand {

    private readonly _command = "sonicaurora2"


    help (): string {

        return `The answer to the question "What is Sonic Aurora?" RIP Aurora and Qunoxic`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Rip Aurora & Qunoxic
            msgObject.delete(0); 
            msgObject.channel.send(`FREE
            Sonic Aurora DEMO 2
              Version: 0.1.0  7 months ago
            Play up to Marble Castle Act 2 in this demo! Online mode is disabled.
            **INTRODUCTION**
            Sonic Aurora is an multiplayer Sonic fangame which attempts to improve upon Sonic Network Land's features and expand its concept!
            The game contains a large variety of stages ranging from Hidden Amazon to Gust Planet zone! All stages have their own unique gimmicks and unique level design!
            
            **STORY**
            Eggman found a new powerful power source and it's up to Sonic, Tails, Knuckles, Mighty & Espio to stop him and his army of robots! Sonic and his friends will encounter some familiar rivals and villains on their way to defeat Eggman and Eggman's newest robots!
            
            **MAIN FEATURES**
            Sonic Aurora can be played in two modes: Multiplayer mode and Singleplayer mode! In Multiplayer mode, you can play with your friends and explore a large HUB WORLD which contains many secrets and bonus stages to explore while the Singleplayer mode is a classic mode in which you play stages in an order.
            
            You'll also gonna be able to play in Encore mode and Boss rush mode!`);
        }
    }
