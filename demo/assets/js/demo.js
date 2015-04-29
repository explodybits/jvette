;(function($, jVette)
{
    jVette && jVette({slide: { duration: 250, easing: 'easeInOutQuad' }});

    $('#jvette').on('mouseenter', 'a', function()
    {
        $(this).addClass('hover');

    }).on('mouseleave', 'a', function()
    {
        $(this).delay(250).removeClass('hover');
    });

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-26657586-1', 'auto');
    ga('send', 'pageview');

})(window.jQuery, window.jVette);