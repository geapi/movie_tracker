// The background page is asking us to find an address on the page.
if (window == top) {
  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    sendResponse(findMovie());
  });
}

// Search the text nodes for a US-style mailing address.
// Return null if none is found.
var findMovie = function() {
	console.log("trying to find a movie");
	var show_times = $('div').find('h3.title span#view-showtimes').text().trim();
	var copy_right = $('div').find('h3.title span.sosumi').text().trim();
	var movie_title = $('div').find('h3.title').text().trim();
	movie_title = movie_title.substring(show_times.length, (movie_title.length - copy_right.length)).trim();
	console.log("movie title: "+ movie_title);
	console.log("show times "+ show_times);
    var release_date = show_times.split(":");
    console.log(release_date[1].trim());
	//var movie_mix = { title: movie_title,
	//									showtimes: showtimes, 
	//									copyright: copyright};
	//return movie_mix[0];
	return (movie_title + "<br/>" + show_times + "<br/>" + copy_right);
	//return movie_title;
}


