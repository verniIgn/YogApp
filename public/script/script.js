

function embedYouTube(videoId) {

  return `<div class="embed-responsive row">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}"></iframe>
  </div>`;
}


function  getHTML(result) {
    var title = `<h2>${result.snippet.title}</h2>`; //only back tick if you want to insert a var
    var description = result.snippet.description;
    var thumb = `<img src=${result.snippet.thumbnails.high.url}></img>`;
    var channelTitle = result.snippet.channelTitle;
    var videoDate = result.snippet.publishedAt;
    var itemHTML = title + thumb + embedYouTube(result.id.videoId);

    return $(itemHTML);
}


$(document).ready(function(){

//$('#key-word').html('');

//prevent submit of form
$("#main-search").on("submit", function(event) {
  event.preventDefault();

  //grab the querry (inputs from the form)
  var q = $('#key-word').val();

  // GET request on API
  $.get(
    'https://www.googleapis.com/youtube/v3/search', {
      part: "snippet, id", 
      type: "video",
      topicId: '/m/019_rr', 
      q: q + '&yoga', //try this + yoga! 
      maxResults: 10,
      key: 'AIzaSyAWNfrQ0BYSa7JtuRpT2UnvsqQBP1G0Yic'},
      function(data) {
        //This will give us the next and prev video arrows
        var nextPageToken = data.nextPageToken;
        var prevPageToken = data.prevPageToken;
        $('#results').html('');
        console.log(data);


        // loops thru the items 
        $.each(data.items, function(i, item) {

              //function that will manage the output
              var itemHTML = getHTML(item);
              //appemnd results to DOM
              $('#results').append(itemHTML);

        });     

        $("#results > img").click(function(){
          alert("Hello");
        
            $('<iframe>').attr("src");


        });


});

      
     
    
}); 


}); //end $(document).ready














  