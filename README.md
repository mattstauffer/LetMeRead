LetMeRead
===========

A mini bookmarklet that forces the base body font of the current web site to be a dark, readable color.

For now, it seems the best option is to:

   1.  Copy the code below
   2.  Add a new bookmark (to this page, for example)
   3.  Edit the bookmark, and replace the URL with the code you copied

**Code:**

	javascript:(function(){/* http://stackoverflow.com/questions/566203/changing-css-values-with-javascript */ function css(selector, property, value) {for (var i=0; i<document.styleSheets.length;i++) {/*Loop through all styles*/ /*Try add rule*/ try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length); } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}/*IE*/ } } /* @todo: Crap, what about if it's set on the rest of the elements? body *? This is more complicated than I thought. */ css('body', 'font-size', '14px!important'); css('body', 'color', '#333!important'); css('body', 'background', '#fff!important'); css('body', 'line-height', '1.6!important'); })();


**Future:**

  * Link the bookmarklet directly on this page (or another page) for "Drag to Bookmark bar" love
  * Smarter page parsing (override other styles, etc.)
  * Link to more advanced services like Readability, Clippable, etc. and describe why this is different
