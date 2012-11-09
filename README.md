LetMeRead
===========

A mini bookmarklet that forces the base body font of the current web site to be a dark, readable color.

@todo: Can we make this link auto-update from LetMeRead.js?

<a href="javascript:(function(){function css(selector, property, value) {for (var i=0; i<document.styleSheets.length;i++) {try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length); } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}} } } css('body', 'font-size', '14px!important'); css('body', 'color', '#333!important'); css('body', 'background', '#fff!important'); };)();">Bookmarklet</a>