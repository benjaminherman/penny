/**
 * Cleverbot personality
 */
export default class Personality {
    
    /**
     * Percentage of humor of this personality
     * @type {number}
     */
    #humor;
    
    /**
     * Percentage of extraversion of this personality
     * @type {number}
     */
    #extraversion;
    
    /**
     * Percentage of attentiveness of this personality
     * @type {number}
     */
    #attentiveness;
    
    /**
     * @param {number} [humorous] Percentage of humor of this personality
     * @param {number} [extraverted] Percentage of extraversion of this personality
     * @param {number} [attentive] Percentage of attentiveness of this personality
     */
    constructor(humor = 50, extraversion = 50, attentiveness = 50) {
        this.#humor = humor;
        this.#extraversion = extraversion;
        this.#attentiveness = attentiveness;
    }
    
    /**
     * Get the humor of this personality
     * @return {number} The humor percentage
     */
    getHumor() {
        return this.#humor;
    }
    
    /**
     * Get the extraversion of this personality
     * @return {number} The extraversion percentage
     */
    getExtraversion() {
        return this.#extraversion;
    }
    
    /**
     * Get the attentiveness of this personality
     * @return {number} The attentiveness percentage
     */
    getAttentiveness() {
        return this.#attentiveness;
    }
}
