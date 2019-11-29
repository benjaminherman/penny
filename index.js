import Configuration from './src/Configuration.js';
import Cleverbot from './src/Cleverbot.js';
import Penny from './src/Penny.js';

const config = new Configuration('./config.json5');
const cleverbot = new Cleverbot();
const penny = new Penny(cleverbot, config);

void async function() {
    await config.load();
    const token = config.get('discordToken');
    penny.login(token);
}();
