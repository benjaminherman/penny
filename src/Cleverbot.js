import request from 'request-promise-native';
import url from 'url';

/**
 * A Cleverbot API client wrapper
 */
export default class Cleverbot {

    /**
     * Cleverbot chat API endpoint
     * @type {URL}
     */
    static ENDPOINT = new URL('getreply', 'https://www.cleverbot.com/');

    /**
     * API key
     * @type {string}
     */
    #key;
    
    /**
     * The personality to generate responses with
     * @type {Personality}
     */
    #personality;
    
    /**
     * Encoded state of conversation
     * @type {string}
     */
    #state = null;
    
    /**
     * @param {string} key API key
     * @param {Personality} personality
     */
    constructor(key, personality) {
        this.#key = key;
        this.#personality = personality;
    }
    
    /**
     * Send a message to the Cleverbot API
     * @param {string} message The message to send
     */
    async send(message) {
        const endpoint = new URL(Cleverbot.ENDPOINT);
        const params = new URLSearchParams({
            key: this.#key,
            input: this.#personality.process(message),
            cb_settings_tweak1: this.#personality.getHumor(),
            cb_settings_tweak2: this.#personality.getExtraversion(),
            cb_settings_tweak3: this.#personality.getAttentiveness()
            cs: this.#state
        });
        endpoint.search = params;
        const response = await request(endpoint);
        
        
        request(endpoint.toString(), (error, response, body) => {
      
      // On error
      if(error) {
        return void console.error(error);
      }
      
      // Parse response body
      console.log(body); // DEBUG
      const { output, cs } = JSON.parse(body);
      
      // Store conversation state
      this.state = cs;
      
      const pennyOutput = output
        .replace(/cleverbot/gi, 'Penny')
        .replace(/hello[.!]/gi, 'Salutations!');
      callback(pennyOutput);
    });
  }
};
