import { Client } from 'discord.js';

/**
 * A Discord client for Penny
 * @extends {Client}
 */
export default class Penny extends Client {
    
    /**
     * @param {Cleverbot} cleverbot A cleverbot client instance
     * @param {Configuration} config A configuration interface instance
     * @param {Object} [options] Options for the Discord client
     */
    constructor(cleverbot, config, options = {}) {
        super(options);
        this.on('ready', this.onReady);
        this.on('message', this.onMessage);
    }
    
    /**
     * Runs when the client becomes ready to start working
     */
    onReady() {
        console.log(`Salutations! I'm logged in as ${ this.user.tag }`);
    }
    
    /**
     * On a discord message
     * @param {Message} message The recieved message
     */
    onMessage(message) {
        
        // Ignore self
        if(message.author.id === this.user.id)
            return;
        
        
        
        // Direct mention in a text channel
        if(message.channel.type === 'text' && message.content.startsWith(`<@${ discord.user.id }>`)) {
            const cleanContent = message.cleanContent
                .slice(discord.user.username.length + 1)
                .trim();
            converse(cleanContent, message.author, message.channel);
        }
        
        // Direct message channel
        if(message.channel.type === 'dm') {
            const cleanContent = message.cleanContent.trim();
            converse(cleanContent, message.author, message.channel);
        }
    }
    
    // const threads = new Map;
    /*function converse(message, author, channel) {
    
    // Start a new thread
    if(!threads.has(author.id)) {
    threads.set(author.id, new Cleverbot(config.get('cleverbotKey'), 25, 50, 75));
    }
    
    // Log dialog
    console.log(`<${ author.tag }>: ${ message }`);
    
    // Chat with penny
    threads
    .get(author.id)
    .chat(message, reply => {
      channel.send(reply);
      console.log(`<Penny> ${reply}`);
    });
    }*/
}
