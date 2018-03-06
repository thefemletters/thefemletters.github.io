(function() {
  var letters = document.querySelector('.letter-grid');

  letters.addEventListener('mouseover', imgTag(switchToGif));
  letters.addEventListener('mouseout', imgTag(switchToPng));

  function switchToGif() {
    var src = this.src;
    this.src = src.replace(/\.png$/i, ".gif");
  }

  function switchToPng() {
    var src = this.src;
    this.src = this.src.replace(/\.gif$/i, ".png");
  }

  function imgTag(fn) {
    return function (e) {
      if (e.target.tagName !== 'IMG') return;

      fn.call(e.target);
    };
  }
})();