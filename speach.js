const googlehome = require('google-home-notifier');
const language = 'ja';
googlehome.device("Google-Home", language);
googlehome.ip("192.168.179.3");
googlehome.notify('こんにちは。私はグーグルホームです。', function(res) {
  console.log(res);
});
