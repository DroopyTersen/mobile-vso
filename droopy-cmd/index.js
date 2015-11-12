var spawn = require('child_process').spawn;

var create = function(initialArgs, outputCallback) {
        // if no output callback, use console.log
    outputCallback = outputCallback || ((data) => console.log("droopy-cmd: " + data));
    
    // spin it up
    var cmd = spawn("cmd", initialArgs);
    
    // output
    cmd.stdout.on('data', outputCallback);
    
    //log on exit
    cmd.on('exit', code => console.log('droopy-cmd exited with code ' + code))
    
    
    return {
        _cmd: cmd,
        write: (str) => cmd.stdin.write(str + '\n'),
        kill: () => cmd.stdin.end()
    }
}

DroopyCmd.prototype.write = (str) => this._cmd.stdin.write(str + "\n");

DroopyCmd.prototype.kill = () => this._cmd.stdin.end();

module.exports = DroopyCmd;