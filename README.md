# jVette
jVette is a native inspired off canvas navigation library powered by jQuery.

 * Small footprint (3.7k gzipped)
 * Silky smooth CSS3 animations
 * Unobtrusive; requires no structural markup changes
 * Fully evented
 * Perfect compliment to any responsive design

## jVette Official
For installation & examples, checkout:
http://jvette.io

### Getting Started
```html
<!DOCTYPE html>
<html lang="en-US">
    <head xmlns="http://www.w3.org/1999/xhtml">
        <!-- jVette assets -->
        <link rel="stylesheet" href="//path-to-your-css/vendor/jvette/jvette.css" />
        <script src="//path-to-your-js/vendor/jvette/jvette.js"></script>
    </head>
    <body>…</body>
</html>
```
### Next, add trigger attributes:
Add the data attribute ```data-jv-trigger``` with a value of ```left | right | close```.<br />
If jVette is enabled, the element(s) marked with ```data-jv-trigger``` will open/close the targeted panel.<br />
```html
<!-- opens left panel -->
<button data-jv-trigger="left" />

<!-- opens right panel -->
<button data-jv-trigger="right" />

<!-- closes the open panel -->
<button data-jv-trigger="close" />
```

[Learn more about element trigger(s).](http://jvette.io/triggers)

### Okay, now define your content elements:

Add the data attribute ```data-jv-content``` with a value of ```left | right``` to define which panel the content block belongs to.
```html
<!-- content for left panel -->
<div data-jv-content="left">Left</div>

<!-- content for right panel -->
<div data-jv-content="right">Right</div>

<!-- specifying content order with data-jv-order attribute -->
<div data-jv-content="left" data-jv-order="1">Second</div>
```
[Learn more about content element(s).](http://jvette.io/content)

### Almost there… invoke jVette:

jVette is a singleton and can be invoked with or without the new operator.
```js
<script>
/**<![CDATA[*/
;(function(jVette)
{
    // passing options to jVette, this is only allowed once
    jVette && jVette({

        // slide speed
       ,slide: {
            duration: 500
        }

        // event handler(s)
       ,open: function(e)
        {}

       ,close: function(e)
        {}
    });
    
})(window.jVette);
/**]]>*/
</script>
```

[Learn more about invocation & options.](http://jvette.io/invoking)
