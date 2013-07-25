Dead Pixel Prank
==========

Ever want to randomly add dead pixels to your web page to mess with your coworkers? Well now you can! Just add the following to the head of your project:

```html
<script src="/path/to/dead_pixel.js"></script>
<script>
document.addEventListener("DOMContentLoaded", deadPixel();, false);
</script>
```

or add 100 2x2 dead pixels!
```html
<script src="/path/to/dead_pixel.js"></script>
<script>
function kill1000() {
  var i = 1000;
  while (i--) { deadPixel(2) }
}
document.addEventListener("DOMContentLoaded", kill1000;, false);
</script>
```

Comming soon(ish)
========

Django middleware to add dead pixels to any project when `settings.DEBUG = True` and an IP is in `settings.INTERNAL_IPs`.
