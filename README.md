imageutils
==========

A few image utils for in browser JavaScript

<img src="http://greggman.github.io/imageutils/examples/example.png" width="358" height="88" />

[Click for live example](http://greggman.github.io/imageutils/examples/index.html)

usage:
------

    <script> src="imageutils.js"></script>
    <script>

      ...
      var newImage = ImageUtils.adjustHSV(someImage, 0, -1, 0);

    </script>

you can also use requirejs style

    <script>
      define(['./imageutils.js'], function(ImageUtils) {
        ...
        var newImage = ImageUtils.adjustHSV(someImage, 0, -1, 0);
      });
    </script>

[See source for docs](dist/imageutils.js)



