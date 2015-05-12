# jVette
jVette is a native inspired off canvas navigation library powered by jQuery.

 * Small footprint (3.7k gzipped)
 * Silky smooth CSS3 animations
 * Unobtrusive; requires no structural markup changes
 * Fully evented
 * Perfect compliment to any responsive design

# Working Examples
 * <a href="http://hookr.io" target="_blank">hookr.io - The WordPress Hook/API Index</a>
 * <a href="http://lessify.io" target="_blank">lessify.io - A configurable CSS to LESS converter and LESS learning tool</a>
 * <a href="http://sassify.io" target="_blank">sassify.io - A configurable CSS to SCSS converter and SCSS learning tool</a>

## jVette Official
For installation & examples, checkout:
<a href="http://jvette.io" target="_blank">http://jvette.io</a>

## Demo
This is included with the GitHub Repo
<a href="http://explodybits.com/github/jvette/" target="_blank">http://explodybits.com/github/jvette/</a>

### Getting Started
Add the references to the jVette assets.
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
<a href="http://jvette.io/triggers/" target="_blank">Learn more about element trigger(s).</a>

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
<a href="http://jvette.io/content/" target="_blank">Learn more about element content element(s).</a>

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
<a href="http://jvette.io/invoking/" target="_blank">Learn more about invocation & options.</a>
