// MET museum API requires no key!
// https://metmuseum.github.io/
// I'D of all available objects
var url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
$.get(url).then((response) => {
  console.log(response);
});

var uniqueID =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/9999";

var primaryI =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/[primaryImage]";

//   GET /public/collection/v1/objects/[objectID] returns a record for an object, containing all open access data about that object, including its image (if the image is available under Open Access)

// the code below creates an image tag and appends it to the html div "#images"

// $.get(uniqueID).then((response) => {
//   console.log(response);
//   image = $("<img>", { src: response.primaryImage });
//   $("#images").append(image);
// });

// now to get a bunch of images on the page!
// the below adds the 1st 1000 object images to the page.

// for (let i = 0; i < 1000; i++) {
//   var uniqueIDALL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`;
//   $.get(uniqueIDALL).then((response) => {
//     console.log(response);
//     image = $("<img>", { src: response.primaryImage });
//     $("#images").append(image);
//   });
// }

// Mostly pictures of old furniture though. Let's see if we can use the isHighlight boolean to get some famous stuff up there
// for (let i = 0; i < 5000; i++) {
//   var uniqueIDALL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`;
//   $.get(uniqueIDALL).then((response) => {
//     console.log(response);
//     image = $("<img>", { src: response.primaryImage });
//     if (response.isHighlight == true) {
//       $("#images").append(image);
//     }
//   });
// }
// out of 5000 i only got one highlight! yikes and I got this error ERR_INSUFFICIENT_RESOURCES

// Artsy Api
var token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZWIzNDIzMDI5NDU5YTAwMTFhNDg0NDkiLCJleHAiOjE1ODk0MTA5OTMsImlhdCI6MTU4ODgwNjE5MywiYXVkIjoiNWViMzQyMzAyOTQ1OWEwMDExYTQ4NDQ5IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlYjM0MjMxZTAyNTU5MDAwZmZjZGM3ZiJ9.tSOAqw1vk4xgBG9WzsXtoPuy22_wVaEmUT8ltibGVbc";
artsyURL = "https://api.artsy.net/api/artists/andy-warhol";
