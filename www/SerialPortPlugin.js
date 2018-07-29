var exec = require('cordova/exec');


var SerialPort = {

    openSerialPort: function (settings, success, error) {
        exec(success, error, "SerialPortPlugin", "openSerialPort", [settings]);
    },
    closeSerialPort: function (success, error) {
        exec(success, error, "SerialPortPlugin", "closeSerialPort", []);
    },
    writeSerialData: function (data, success, error) {
        exec(success, error, "SerialPortPlugin", "writeSerialData", [data]);
    },
    readSerialData: function (success, error) {
        exec(success, error, "SerialPortPlugin", "readSerialData", []);
    }

};

module.exports = SerialPort;