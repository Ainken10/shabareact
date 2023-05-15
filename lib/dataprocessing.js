//create data processing method
function dataProcessing(data) {
    console.log(data);
}

//method thats load a XML from file
function loadXML() {
    var fs = require('fs');
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser();
    fs.readFile('./xmlorszaggen.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            console.dir(result);
            console.log('Done');
        });
    });
}

loadXML();

