(function(){ 
	/* http://stackoverflow.com/questions/566203/changing-css-values-with-javascript */
	function css(selector, property, value) {
		for (var i=0; i<document.styleSheets.length;i++) {/*Loop through all styles*/
			/*Try add rule*/
			try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
			} catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}/*IE*/
		}
	}  
	/* @todo: Crap, what about if it's set on the rest of the elements? body *? This is more complicated than I thought. */
	css('body', 'font-size', '14px!important');
	css('body', 'color', '#333!important');
	css('body', 'background', '#fff!important');
	css('body', 'line-height', '1.6!important');
})();