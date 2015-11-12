var droopyCmd = require('../droopy-cmd');
var http = new (require('droopy-http'))();
var qrcode = require('qrcode-terminal');

var getTunnelUrl = function() {
    var ngrokApiUrl = "http://localhost:4040/api/tunnels";
    return http.getJSON(ngrokApiUrl).then((data) => {
        if (data.tunnels && data.tunnels.length > 1) {
            return data.tunnels[1].public_url;
        } else {
            //throw "Unable to find any active NGROK tunnels."
            return null;
        }
    })   
}
var start = function(port) {
    var ngrokArgs = ["ngrok", "http", port]
    var ngrokProcess = droopyCmd.start(ngrokArgs)
    
    // Give it a bit to spin up
    setTimeout(function() {
        getTunnelUrl().then(url => {
            if (url) {
                qrcode.generate(url, (qr) => console.log(qr));
            } else {
                console.log("Couldn't find ngrok tunnels");
            }
        })
    }, 3000);
    
    
    return { 
        stop: () => ngrokProcess.kill() 
    }
}

qrcode.generate('http://github.com', function (qrcode) {
    console.log(qrcode);
});

module.exports = { start };