/*!
 * jQuery-Wrap-Text-In-Tag
 *
 * @fileoverview jQuery Wrap Text In Tag
 *
 * @author Radovan Janjic <rade@it-radionica.com>
 * @copyright 2013-2014 Radovan Janjic <rade@it-radionica.com>
 * @license http://opensource.org/licenses/BSD-3-Clause
 */
(function ($){
	"use strict";
	$.fn.wrapTextInTag = function (words, tag, children) {
		// Defaults
		var tag = tag || 'strong',
			words = words instanceof Array ? words : [words], 
			i = words.length,
			children = typeof children !== 'undefined' ? !!children : true;
		
		// Sanitize text for regex
		while (i--) words[i] = words[i].replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');
		
		// Replacement vars
		var regex = new RegExp(words.join('|'), 'gi');
		
		// Tag is jQuery obj
		if (tag instanceof jQuery) {
			var replace = $('<div>').append(tag.text('$[&]').clone()).remove().html().replace('[&amp;]</', '&</');
		} else {
			var replace = '<' + tag + '>$&</' + tag + '>';
		}
		
		// Wrap
		if (this.children().length == 0) { // No children
			return this.html(function () {
				return $(this).text().replace(regex, replace);
			});
		} else { // With children
			// Wrap children text
			if (children) {
				this.find('*').each(function() {
					$(this).contents().filter(function () { return this.nodeType == 3; }).first().replaceWith(function () { 
						return $(this).text().replace(regex, replace); 
					});
				});
			}
			// Wrap current elements text
			this.contents().filter(function () { return this.nodeType == 3; }).first().replaceWith(function () { 
				return $(this).text().replace(regex, replace);
			});
		}
	};
	
	$.fn.unwrapTextInTag = function () {
		this.each(function() {
			var parent = $(this).parent();
			$(this).replaceWith(this.childNodes);
			parent[0].normalize();
		});
	};
})(jQuery);