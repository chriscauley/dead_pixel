Dead Pixel Prank
==========

Ever want to randomly add dead pixels to your web page to mess with your coworkers? Well now you can! Just add the following to the head of your project:

```html
<script src="/path/to/dead_pixel.js"></script>
```

Every time the page is loaded the there is a 50/50 chance a dead pixel will be generated. All previous pixels are preserved with every page load. So after a person visits your site 100 times they will have 50 dead pixels. Clearing cookies removes the pixels.

Comming soon(ish)
========

Demo page.

Chrome extension (global dead pixels).

Django middleware to add dead pixels to any project when `settings.DEBUG = True` and an IP is in `settings.INTERNAL_IPs`.
