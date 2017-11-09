require('./app.scss');
var removeIframeFromElement = require('./removeIframeFromElement');
var addIframeToElement = require('./addIframeToElement');

var body = document.getElementsByTagName("body")[0];
removeIframeFromElement(body);
addIframeToElement(body);
