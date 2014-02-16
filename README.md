jQuery-Wrap-Text-In-Tag
======================

jQuery-Wrap-Text-In-Tag



Example 1
 - Wrap "fox" from element "#example-1" in "strong"

`````html
<p id="example-1">The quick brown fox jumps over the lazy dog.</p>
`````

`````javascript
$('#example-1').wrapTextInTag('fox');
`````
Output:
`````html
<p id="example-1">The quick brown <strong>fox</strong> jumps over the lazy dog.</p>
`````

Example 2
 - Wrap "fox" and "dog" from elements ".example-2" in "strong"

`````html
<p class="example-2">The quick brown fox jumps over the lazy dog.</p>
<p class="example-2">The quick brown fox jumps over the lazy dog.</p>
<p class="example-2">The quick brown fox jumps over the lazy dog.</p>
`````

`````javascript
$('.example-2').wrapTextInTag(['fox', 'dog'], 'strong');
`````
Output:
`````html
<p class="example-2">The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.</p>
<p class="example-2">The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.</p>
<p class="example-2">The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.</p>
`````

Example 3
 - Wrap "fox" and "dog" in "strong" only from element "#example-3" without wrapping children elements

`````html
<div id="example-3">
	The quick brown fox jumps over the lazy dog.
	<div>
		The quick brown fox jumps over the lazy dog.
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
	</div>
</div>
`````

`````javascript
$('#example-3').wrapTextInTag(['fox', 'dog'], 'strong', false);
`````
Output:
`````html
<div id="example-3">
	The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.
	<div>
		The quick brown fox jumps over the lazy dog.
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
	</div>
</div>
`````

Example 4
 - Wrap "fox" and "dog" in "strong" from element "#example-4" and all children elements

`````html
<div id="example-4">
	The quick brown fox jumps over the lazy dog.
	<div>
		The quick brown fox jumps over the lazy dog.
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
	</div>
</div>
`````

`````javascript
$('#example-4').wrapTextInTag(['fox', 'dog'], 'strong');
`````
Output:
`````html
<div id="example-4">
	The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.
	<div>
		The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.
		<p>The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.</p>
		<p>The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.</p>
		<p>The quick brown <strong>fox</strong> jumps over the lazy <strong>dog</strong>.</p>
	</div>
</div>
`````

Example 5
 - Wrap "fox" and "dog" in "jquery object" from element "#example-5" and all children elements

`````html
<div id="example-5">
	The quick brown fox jumps over the lazy dog.
	<div>
		The quick brown fox jumps over the lazy dog.
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
		<p>The quick brown fox jumps over the lazy dog.</p>
	</div>
</div>
`````

`````javascript
$('#example-5').wrapTextInTag(
	['fox', 'dog'], 
	$('<a/>', {
		class:'red', 
		href:'http://www.example.com/?asdf=1&asd=2',
		target:'_blank'
	})
);
`````
Output:
`````html
<div id="example-5">
	The quick brown <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">fox</a> jumps over the lazy <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">dog</a>.
	<div>
		The quick brown <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">fox</a> jumps over the lazy <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">dog</a>.
		<p>The quick brown <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">fox</a> jumps over the lazy <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">dog</a>.</p>
		<p>The quick brown <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">fox</a> jumps over the lazy <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">dog</a>.</p>
		<p>The quick brown <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">fox</a> jumps over the lazy <a class="red" href="http://www.example.com/?asdf=1&amp;asd=2" target="_blank">dog</a>.</p>
	</div>
</div>
`````