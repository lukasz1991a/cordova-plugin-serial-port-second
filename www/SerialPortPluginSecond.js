var exec = require('cordova/exec');


var SerialPort = {

    openDevice: function (settings, success, error) {
        exec(success, error, "SerialPortPluginSecond", "openDevice", [settings]);
    },
    closeDevice: function (success, error) {
        exec(success, error, "SerialPortPluginSecond", "closeDevice", []);
    },
    read: function (success, error) {
        exec(success, error, "SerialPortPluginSecond", "read", []);
    },
    write: function (data, success, error) {
        exec(success, error, "SerialPortPluginSecond", "write", [data]);
    },
    sendDataAndWaitResponse: function (data, timeoutMs, success, error) {
        exec(success, error, "SerialPortPluginSecond", "sendDataAndWaitResponse", [data, timeoutMs]);
    },
    setHex: function (isTrue) {
        exec(null, null, "SerialPortPluginSecond", "setHex", [isTrue]);
    }
};

module.exports = SerialPort;
