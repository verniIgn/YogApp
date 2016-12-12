$(document).ready(function(){

  function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client.init({
      'apiKey': 'AIzaSyAWNfrQ0BYSa7JtuRpT2UnvsqQBP1G0Yic',
      'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
      }).then(function() {
       // 3. Initialize and make the API request.
       return gapi.client.people.people.get({
        resourceName: 'people/me'
      });
      }).then(function(response) {
        console.log(response.result);
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
        }); 

      mainSearch();
    }
  // 1. Load the JavaScript client library.
  gapi.load('client', start);
  

  function mainSearch() {
    $("#main-search").on("submit", function() {
        event.preventDefault();

        var $keyWord = $("input[name=keyWord]");
        var kw = $keyWord.val();
       
        var results = YouTube.search.list('id, snippet', {q: kw, maxResults: 25});
        

        // request
        // $.getJSON('https://www.googleapis.com/youtube/v3/search', {part: "snippet", type: "video", q: encodeURIComponent($("#key-word").val()).replace(/%20/g, "+"), maxResults: 10}).done(function(data) {

        // }) 

        //     console.log(data);


        }


        // execute the request
        // request.execute(function(response) {
        //     console.log(response);
        );


  }

  
    
});

















  