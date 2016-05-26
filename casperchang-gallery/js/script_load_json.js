$(document).ready(function() {
	// jQuery goes here

	$.getJSON('data/imgList_family.json', function(data) {

		// # clear the target area
		$('#main').empty();

		// loop through the images
		$.each(data, function(key, o) {

			/* create an article obj
			<div class='post'>
				<div class='p-title'>o.date + o.title</div>
				<figure><img src="o.path class=h/v?"></figure>
				<div class='p-article'>o.article</div>
				<div class='p-tag'>
					each {
					<p class='tag-mark'>#</p>
					<p class='tag-text'>o.tag</p>
					}
				</div>
			</div>
			*/
			var start = "<div class='post'>";
			var end = '</div>';
			var head = '<div class="p-title">' + o.date + ' - ' + o.title + end;
			if(o.horizontal == '1') {
				var img = '<figure><img src="' + o.path +'" class="horizontal"></figure>'
			}
			else {
				var img = '<figure><img src="' + o.path +'" class="vertical"></figure>'
			}
			var article = '<div class="p-article">' + o.article + end;
			var tag = "<div class='p-tag'>";
			$.each(o.tag, function(i, tagvalue) {
				tag += "<p class='tag-mark'>#</p><p class='tag-text'>" + tagvalue + "</p>";
			})
			tag += end;
			$('#main').append(start + head + img + article + tag + end);

		}); // -- each

	}).error(function() {
		// console.log('error');
	}).complete(function() {
		// console.log('complete');
	}).success(function() {
		console.log($('#main').outerHeight());

		// force to relayout the sidebar to fill w/ background image
		$('#mynav').css('height', $('#main').outerHeight());

	}); // -- ajax call

});// close document.ready