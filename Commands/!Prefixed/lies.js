exports.run = (Vargs, voiceChannel, message, ytdl, Discord) => {
	voiceChannel.join()
		.then(connection => {
			const dispatcher = connection.playFile('./Audio/Lies.mp3', { seek: 0, volume: 6/10 });

			dispatcher.on('end', () => voiceChannel.leave());

		}).catch(console.error);
};