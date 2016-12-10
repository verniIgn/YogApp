














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
    }
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
  