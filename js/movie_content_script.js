// The background page is asking us to find an address on the page.
if (window == top) {
  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    sendResponse(findMovie());
  });
}

// Search the text nodes for a US-style mailing address.
// Return null if none is found.
var findMovie = function() {
	var show_times = $('div').find('h3.title span#view-showtimes').text().trim();
	var copy_right = $('div').find('h3.title span.sosumi').text().trim();
	var movie_title = $('div').find('h3.title').text().trim();
	movie_title = movie_title.substring(show_times.length, (movie_title.length - copy_right.length)).trim();
//	console.log("show times "+ show_times);
    var release_date_raw = show_times.split(":");
    var release_date = release_date_raw[1].trim();
//    console.log("release date:", release_date);
	//var movie_mix = { title: movie_title,
	//									showtimes: showtimes, 
	//									copyright: copyright};
	//return movie_mix[0];
    var movie_hash ={
        title: movie_title,
        release_date: release_date
    }
//	return (movie_title + "<br/>" + show_times + "<br/>" + copy_right);
	return movie_hash;
}


