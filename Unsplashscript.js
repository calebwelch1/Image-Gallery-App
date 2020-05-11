function searchPhotos() {
  let search = document.getElementById("search").value; // to search a list of photos based on query
  var apiKey = "HW9N_DcouND3LdAQFb-NUM_s-4BDQtFZ4R7_JANDOaM";
  var url =
    "https://api.unsplash.com/collections?page=2&client_id=" +
    apiKey +
    "&query=" +
    search;
  $.ajax({
    url: url,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    response.forEach((photo) => {
      var result = `<img src="${photo.preview_photos.urls.regular}" class="image">
         <a href="${photo.links.download}">`;
      $("#result").append(result);

      // document.getElementById("result").append(result);
      //console.log(response[0].preview_photos[0].urls.regular);
    });
  });
}
