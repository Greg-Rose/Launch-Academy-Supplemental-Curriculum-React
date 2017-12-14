let ready = () => {
  // your code, here
  return new Promise((resolve, reject) => {
    document.addEventListener('readystatechange', function() {
      if (document.readyState === "loading") {
        reject(Error('still loading'));
      } else {
        resolve('loaded');
      }
    });
  });
};
