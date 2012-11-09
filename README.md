LetMeRead
===========

A mini bookmarklet that forces the base body font of the current web site to be a dark, readable color.

For now, it seems the best option is to:

   1.  Copy the content below
   2.  Add a new bookmark to this page
   3.  Edit the URL to the bookmark, and paste the code in there

Code:
	javascript:(function(){/* http://stackoverflow.com/questions/566203/changing-css-values-with-javascript */ function css(selector, property, value) {for (var i=0; i<document.styleSheets.length;i++) {/*Loop through all styles*/ /*Try add rule*/ try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length); } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}/*IE*/ } } /* @todo: Crap, what about if it's set on the rest of the elements? body *? This is more complicated than I thought. */ /* @todo: Haven't even tested this, but need to get back to work. So.. test. */ css('body', 'font-size', '14px!important'); css('body', 'color', '#333!important'); css('body', 'background', '#fff!important'); })();

@todo: Is it possible to put a bookmarklet on this page for direct copying?

@todo: Can we even embed the bookmarklet here?