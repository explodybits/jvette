(function($, w, d)
{
    'use strict';
    
    var h = d.documentElement
       ,b = d.createElement('body')
       ,e = d.createElement('div')
       ,c = []
       ,t;

    var screen = null
       ,size = null
       ,sizes = {
            XS: 0,
            SM: 1,
            MD: 2,
            LG: 3,
            XL: 4
        }
       ,keys = Object.keys(sizes);
 
    var apply = function()
    {
        var v = e.className = '';
        screen = size = null;

        for (var s in sizes) {
            v = s.toLowerCase();
            e.className = 'hidden-' + v;
            if (0 === e.clientWidth) {
                size = sizes[s];
                v = 'screen-' + v;
                break;
            }
            v = '';
            size = null;
        }
        
        screen = v;        
        return v;
    };
        
    (function() {
        apply();        
        if (size <= sizes.MD && /Android|webOS|iP(hone|ad|od)|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            h.className += ' device-mobile';        
    })();

    ;(function()
    {
        $(function()
        {
            e = $(e).remove();
            h.removeChild(b);
            $(d.body).append(e);
            e = e.get(0);
        });

        b.appendChild(e);
        h.appendChild(b);
    })();

    ;(function()
    {
        var re = new RegExp('\\bscreen-(?:' + keys.join('|') + ')\\b', 'gi');
        
        var resize = function()
        {
            t = clearTimeout(t);            
            h.className = h.className.replace(re, '');
            h.className += (' ' + apply());
        };

        resize();

        $(w).resize(function()
        {
            t = clearTimeout(t);
            t = setTimeout(function()
            {
                resize();
            }, 15);
        });
    })();

})(window.jQuery, window, document);