const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
require('dotenv/config');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
(async () => {
  try {

  eventHandler(client);

    
  client.login(process.env.TOKEN);
} catch(error) {
    console.log('Error: $(error)', error)
    }
});
