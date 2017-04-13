const apiKey = 'AIzaSyDB2rv_p72WbrIQErMhVCM61-QZb0TFEJ0';

$(function(){
  const endpointURL = "https://www.googleapis.com/youtube/v3/search";

  function getData(searchTerm, callback){
    const query={
      part:'snippet',
      key:apiKey,
      q:searchTerm
    }
    $.getJSON(endpointURL, query, callback);
  }

  function showThumbnail(data){
    let thumbnails = `<p>No Results</p>`;
    console.log(data);
    if (data.items) {
      thumbnails = data.items.map(function(item){
        if(item.id.kind === "youtube#channel") {
          return `<a target="_blank" href="https://www.youtube.com/channel/${item.id.channelId}"><img src=" ${item.snippet.thumbnails.high.url} " /></a>`
        } else {
          return `<a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}"><img src=" ${item.snippet.thumbnails.high.url} " /></a>`
        }

      })
    }

    $('.js-container').append(thumbnails);
  }
  $('.search-form').on('click', 'button', function(event) {
    event.preventDefault();
    $('.js-container').empty();
    let searchTerm = $('#search-box').val();
      getData(searchTerm, showThumbnail);
  })

//item.snippet.thumbnails.high.url

//function displayOMDBSearchData(data) {
//  var resultElements = '<p>No results</p>';
//
//  if (data.Search) {
//    resultElements = data.Search.map(function(item) {
//      return '<p>' + item.Title + '</p>';
//    });
//  }
//
//  $('.js-search-results').html(resultElements);
//}


})
