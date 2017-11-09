var addIframeToElement = function(element) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute('src', 'http://www.youtube.com/embed/-zFJI4axcxs?autoplay=1')
  element.appendChild(iframe);
};

module.exports = addIframeToElement;
