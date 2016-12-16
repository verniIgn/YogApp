// yoga style list
var hatha = 'Hatha Yoga: Hatha is a general category that includes most yoga styles. It is an old system that includes the practice of asanas (yoga postures) and pranayama (yoga breathing exercises), which help bring peace to the mind and body, preparing the body for deeper spiritual practices such as meditation. Today, the term, hatha, is used in such a broad way that it is difficult to know what a particular hatha yoga class will be like. In most cases, however, it will be relatively gentle, slow and great for beginners or students who prefer a more relaxed style where they hold poses longer. It can vary a lot, so it is a good idea to call the studio before attending the class.';
var vinyasa = 'Vinyasa: Like hatha, vinyasa is a general term that describes many different styles of yoga. It essentially means movement synchronized with breath and is a vigorous style based on a rapid flow through sun salutations. You may also see a vinyasa yoga class referred to as a flow class, which refers to the continuous flow from one posture to the next.';
var ashtanga = 'Ashtanga Yoga: Ashtanga is a system of yoga that was brought to the modern world by Sri K. Pattabhi Jois. If you attend an ashtanga class at a studio you will be led nonstop through one or more of the ashtanga series, while being encouraged to breathe as you move from pose to pose. Each series is a set sequence of asanas, always in the same order. It is typically fast-paced, vigorous and physically challenging. There are six series in total, increasing in difficulty as you move from the primary series on. Even though a typical class moves quite quickly, most Ashtanga studios offer Mysore-style classes, which allow students to work at their own pace and to be assessed by senior instructors.';
var power = "Power Yoga: Power yoga is used to describe a vigorous, vinyasa-style yoga. It originally closely resembled ashtanga and was an attempt to make ashtanga yoga more accessible to Western students. It differs, however, in that it is not a set series of poses, but rather allows the instructor freedom to teach what they want. Two American yoga teachers, Beryl Bender Birch and Bryan Kest, both of whom studied with Sri K. Pattabhi Jois, are most often credited with inventing power yoga. Power yoga's popularity has spread around the world and is now taught in most studios. Because the style can vary, it is recommended that you consult with the studio or individual instructor before attending a class.";
var bikram = "Bikram Yoga: One thing you can be sure of when you attend a Bikram class is consistency. Outside of the instructor, a Bikram class is the same no matter where you go, consisting of the same, copyrighted twenty-six postures and two breathing techniques, in the same order for ninety minutes, in a room heated to 105°F (40.6°C), with a humidity of 40%. You can also be certain that you will sweat; the room is hot and the class challenges you both physically and mentally. Founded by Bikram Choudhury, this form of hot yoga is meant to flush toxins, manage weight and allow students to move more deeply into poses.";
var jivamukti = "Jivamukti Yoga:  David Life and Sharon Gannon created jivamukti yoga in 1984, and since then have studied with a number of teachers, including Swami Nirmalananda and Sri K. Pattabhi Jois. Their classes resemble ashtanga yoga in the vinyasa-style flow through asanas. Each class begins with a standardized warm-up sequence unique to jivamukti and often teachers will incorporate weekly themes, chanting, meditation, readings and affirmations.";
var iyengar = "Iyengar Yoga: The trademark of iyengar yoga is the intense focus on the subtleties of each posture. B.K.S. Iyengar teaches his classes from his home in Pune, India and has become one of the most influential yoga gurus of our time. In a typical iyengar class, poses are held much longer than in other schools of yoga, in an effort to pay closer attention to the precise musculoskeletal alignment within each asana. Another trademark of iyengar yoga is the use of props, such as blocks, belts, bolsters, chairs and blankets, which are used to accommodate injuries, tightness or structural imbalances, as well as teach the student how to move into a posture properly.";
var anusara = "Anusara Yoga: The anusara style is a new system of hatha yoga that teaches a set of Universal Principles of Alignment that underlie all yoga postures, while encouraging flowing with grace and following your heart. Founded by John Friend, the practice of anusara is broadly categorized into three parts, known as the Three A's. They include attitude, alignment and action.";
var sivananda = "Sivananda Yoga: Sivananda yoga is a form of hatha yoga founded by Swami Sivananda and brought to the west by Swami Vishnu-devananda. A class typically begins with Savasana (relaxation pose), kapalabhati and anuloma viloma, followed by a few rounds of surya namaskara. The class then moves through Sivananda's twelve asanas, which together are designed to increase strength and flexibility of the spine. Chanting and meditation can also be a part of a full-length class. Vishnu-devananda later founded the International Sivananda Yoga Vedanta Centers, summerizing Sivananda's system into five main principles: proper exercise (asanas); proper breathing (pranayama); proper relaxation (savasana); proper diet (vegetarian); and positive thinking (vedanta) and meditation (dhyana).";
var viniyoga = "Viniyoga:  Viniyoga refers to an approach to yoga that adapts the various means and methods of practice to the unique condition, needs and interests of the individual. Created by T.K.V. Desikachar, the goal is to give the practitioner the tools to individualize and actualize the process of self-discovery and personal transformation.";
var kundalini = "Kundalini Yoga: Kundalini yoga incorporates repeated movements or exercises, dynamic breathing techniques, chanting, meditation and mantras. Each specific kundalini exercise, referred to as a kriya, is a movement that is often repeated and is synchronized with the breath. The practice is designed to awaken the energy at the base of the spine in order to draw it upward through each of the seven chakras. Brought to the west by Yogi Bhajan, this form of yoga looks and feels quite different than any other, due to its focus on repetitive, enhanced breathing and the movement of energy through the body.";
var yin = "Yin Yoga:  Yin yoga is a slow-paced style of yoga in which poses are held for five minutes or longer. Even though it is passive, yin yoga can be quite challenging due to the long holds, particularly if your body is not used to it. The purpose is to apply moderate stress to the connective tissue - the tendons, fascia and ligaments - with the aim of increasing circulation in the joints and improving flexibility. It was founded and first taught in the U.S. in the late 1970s by martial arts expert and Taoist yoga teacher Paulie Zink. Yin-style yoga is now being taught across North America and in Europe, due in large part to two of the more prominent instructors, Paul Grilley and Sarah Powers.";
var integrative = "Integrative Yoga Therapy (IYT): Integrative yoga therapy brings together asanas, pranayama, mudra, yoga nidra, mantra and meditation into a complete package where they can be utilized for therapy. Founded by Joseph Le Page in 1993, IYT was an attempt to create a training program with the focus on yoga as a healing art, and has designed programs specifically for medical and mainstream wellness settings, including hospital and rehabilitation centres.";
var restorative = "Restorative Yoga: Restorative yoga is a gentle, relaxing, passive form of yoga that allows students to relax and release the body into a gentle stretch that is held for as long as 10 minutes. This style makes use of a wide range of props, including bolsters, blocks, straps and blankets. The intention is to provide support within each pose, making it easier to completely let go.";


function insertTitle() {
  return '<div class="container-fluid"><h1>Your Results</h1></div>';
}

function embedYouTube(videoId) {
  return `<iframe width="640" height="360" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

  // return `<iframe width="854" height="480" src="https://www.youtube.com/embed/V5i5Qz2IGJE" frameborder="0" allowfullscreen></iframe>`
}


function getHTML(result) {
  var title = `<h2>Title: ${result.snippet.title}</h2>`;
  var description = `<div class="descrip"><h3>Description: ${result.snippet.description}</h3></div>`;
  var channelTitle = `<h4>Channel Title: ${result.snippet.channelTitle}</h4>`;
  var videoDate = `<h5>Published: ${result.snippet.publishedAt}</h5>`;
  var thumb = `<img src=${result.snippet.thumbnails.high.url}></img>`;
  var videoId = `${result.id.videoId}`;

  var itemHTML = title + description + channelTitle + thumb;

  return $(itemHTML);
}

// displays style textbox
$('#displayStyle').click(function() {

         $('#displayStyle').html('');

        if (style === 'Hatha') {

          var hatha = 'Hatha Yoga: Hatha is a general category that includes most yoga styles. It is an old system that includes the practice of asanas (yoga postures) and pranayama (yoga breathing exercises), which help bring peace to the mind and body, preparing the body for deeper spiritual practices such as meditation. Today, the term, hatha, is used in such a broad way that it is difficult to know what a particular hatha yoga class will be like. In most cases, however, it will be relatively gentle, slow and great for beginners or students who prefer a more relaxed style where they hold poses longer. It can vary a lot, so it is a good idea to call the studio before attending the class.';

          $('#displayStyle').prepend(hatha);

        } else if (style === 'Vinyasa') {

           var vinyasa = 'Vinyasa: Like hatha, vinyasa is a general term that describes many different styles of yoga. It essentially means movement synchronized with breath and is a vigorous style based on a rapid flow through sun salutations. You may also see a vinyasa yoga class referred to as a flow class, which refers to the continuous flow from one posture to the next.';

          $('#displayStyle').append(vinyasa);


        }

      });


$(document).ready(function() {


  //prevent submit of form
  $("#main-search").on("submit", function(event) {
    event.preventDefault();

    //grab data to search from user
    var q = $('#key-word').val();
    var style = $('#exampleSelect1').val();
    var level = $('#selectLevel').val();
    var length = $('#selectLength').val();
    // var loc = $('#location').val();
    // var rad = $('#radius').val();

    $("#results").prepend(insertTitle());

    // GET request on API
    $.get(
      'https://www.googleapis.com/youtube/v3/search', {
        part: "snippet, id",
        type: "video",
        topicId: '/m/019_rr',
        regionCode: 'US',
        // location: loc,
        // locationRadius: rad,
        videoDuration: length,
        q: `${q} yoga ${style} ${level}`, //query
        maxResults: 10,
        key: 'AIzaSyAWNfrQ0BYSa7JtuRpT2UnvsqQBP1G0Yic'
      }, function(data) {
       

       
        // loops thru the items 
        $.each(data.items, function(i, item) { //will manage the output 
            
            var itemHTML = getHTML(item);
            //appemnd results to DOM
            $('#results').append(itemHTML);

            $("#results > img").click(function() {
          // console.log(data.items);
           console.log(item);
            // console.log($(this));         
          $(this).replaceWith(embedYouTube(item.id.videoId));
        });


        });
        
        

      });

  });


}); //end $(document).ready
