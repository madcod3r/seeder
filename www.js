import WebTorrent from 'webtorrent-hybrid'

const client = new WebTorrent()
const mediaDir = '/volume1/Media'
const torrentDir = 'The Wire Complete Mp4 1080p'
const filePath = mediaDir + '/The Wire S01E01.mp4'
const torrentPath = mediaDir + '/' + torrentDir

console.log('torrent path:', torrentPath)

client.seed(torrentPath, torrent => {
    console.log('torrentId (magnet link):', torrent.magnetURI)
})

client.on('error', function(err) {
    console.error(err.message);
});

client.on('download', function(bytes) {
    //console.log('download', {
	//    progress: Math.round(client.progress * 100 * 100) / 100,
	//	downloadSpeed: client.downloadSpeed,
	//	ratio: client.ratio
	//})
});

client.on('torrent', function(torrent) {
//  console.log('torrent', torrent)
});
