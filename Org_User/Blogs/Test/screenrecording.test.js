const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const Config = {
    followNewTab : false,
    fps : 25,
    ffmpeg_Path : null,
    videoFrame : {
        width : 1024,
        height : 768,
    },
    aspectRatio : '4.3',
};