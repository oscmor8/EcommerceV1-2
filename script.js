// Start with an ajax request to fetch our data
const http = new XMLHttpRequest();
// the variable http holds all methods and properties
// prepare the request with an open method
http.open("get", "products.json", true);
// the second argument we pass the file where the data lives in this case its our json file
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    const products = JSON.parse(this.responseText);
    let output = ""; // empty variable to add the incoming data
    // Make an html template to the incoming data
    for (let item of products) {
      output += `
            <div class="product">
               <img src="${item.image}" alt=“${item.description}“>
               <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="price">
                  <span>${item.price}</span>
               </p>
               <button class="btn btn1">Add to cart</button>
            </div>
         `;
    }
    // last step is to target the products container and add the data to the empty div
    document.querySelector(".products").innerHTML = output;
  }
};
// ====================== Map API ====================
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.158003151155704, lng: -80.88697729260173 },
    zoom: 13,
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          {
            invert_lightness: true,
          },
          {
            saturation: "-9",
          },
          {
            lightness: "0",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          {
            weight: "1.00",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            weight: "0.49",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "on",
          },
          {
            weight: "0.01",
          },
          {
            lightness: "-7",
          },
          {
            saturation: "-35",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
    ],
  });
  new google.maps.Marker({
    position: { lat: 35.158003151155704, lng: -80.88697729260173 },
    map: map,
  });
}














