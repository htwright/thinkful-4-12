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
  
  getData('Pewdiepie', showThumbnail);
  
  
  function showThumbnail(data){
    let thumbnails = `<p>No Results</p>`;
    
    thumbnails = data.items.map(function(item){
      return `<img src="${item}" />`
    })
    console.log(data);

  }

  
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