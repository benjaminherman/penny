import JSON5 from 'json5';
import { fs: promises } from 'fs';

/**
 * A json5 configuration file interface
 */
export default class Configuration {
    
    /**
     * The path of the configuration file
     * @type {string}
     * @private
     */
    #path;

    /**
     * The default property values of this configuration instance
     * @type {Object}
     * @private
     */
    #defaults;
    
    /**
     * Loaded data
     * @type {Object}
     * @private
     */
    #data = {};

    /**
     * @param {string} path Configuration file path
     * @param {Object} [defaults] Default properties
     */
    constructor(path, defaults = {}) {
        this.#path = path;
        this.#defaults = defaults;
    }

    /**
     * Get the value of a configuration property
     * @param {*} key The unique property key
     * @return {*} The value of the property
     */
    get(key) {
        return (this.#data[key] !== undefined)
            ? this.#data[key]
            : (this.#defaults[key] !== undefined)
                ? this.#defaults[key]
                : null;
    }
    
    /**
     * Set the value of a configuration property
     * @param {*} key The unique property key
     * @param {*} value The value to set
     */
    set(key, value) {
        this.#data[key] = value;
    }
    
    /**
     * Delete a configuration property
     * @param {*} key The unique property key
     * @return {boolean} Whether the property is deleted
     */
    delete(key) {
        return delete this.#data[key]
    }
  
    /**
     * Load data from configuration file
     */
    async load() {
        const contents = await fs.readFile(this.#path, 'utf8');
        const data = JSON5.parse(contents);
        Object.assign(this.#data, data);
        return this;
    }
  
    /**
     * Save data to configruation file
     */
    async save() {
        const contents = JSON5.stringify(this.#data);
        await fs.writeFile(this.#path, contents);
    }
}
