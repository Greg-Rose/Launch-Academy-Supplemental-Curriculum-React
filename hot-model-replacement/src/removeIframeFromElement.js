var removeIframeFromElement = function(element) {
  var iframe = element.querySelector("iframe");
  if (iframe) {
    element.removeChild(iframe);
  }
};

module.exports = removeIframeFromElement;
