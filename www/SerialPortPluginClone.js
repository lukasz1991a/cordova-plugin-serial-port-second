var exec = require('cordova/exec');


var SerialPort = {

    openDevice: function (settings, success, error) {
        exec(success, error, "SerialPortPluginClone", "openDevice", [settings]);
    },
    closeDevice: function (success, error) {
        exec(success, error, "SerialPortPluginClone", "closeDevice", []);
    },
    read: function (success, error) {
        exec(success, error, "SerialPortPluginClone", "read", []);
    },
    write: function (data, success, error) {
        exec(success, error, "SerialPortPluginClone", "write", [data]);
    },
    sendDataAndWaitResponse: function (data, timeoutMs, success, error) {
        exec(success, error, "SerialPortPluginClone", "sendDataAndWaitResponse", [data, timeoutMs]);
    },
    setHex: function (isTrue) {
        exec(null, null, "SerialPortPluginClone", "setHex", [isTrue]);
    }
};

module.exports = SerialPort;
