const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goodbot')
		.setDescription('Compliments the bot. The bot is Cozy.'),
	async execute(interaction) {
		await interaction.reply("<:Talvikomfy:1016416501521195018>");
	},
};