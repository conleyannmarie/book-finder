var userFormEl = document.querySelector("#book");
var searchBtn = document.querySelector(".search");

var bookResult = userFormEl.value;
console.log(bookResult);

var formSubmitHandler = function (event) {
  event.preventDefault();

  var bookResult = userFormEl.value.trim();
  findBook(bookResult);
  console.log(bookResult);
  fetch(
    "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
      bookResult +
      "&maxResults=20&printType=books&orderBy=relavance"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

searchBtn.addEventListener("click", formSubmitHandler);

const apiKey = "rOks7u7aABNkDxOUutMyH0ZGf3ixyGWm";

var formSubmitHandler = function(event) {
    event.preventDefault();

    var bookResult = userFormEl.value.trim();
    console.log(bookResult);

    const query = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookResult}&api-key=${apiKey}`;

        fetch(query)
        .then((response) => response.json())
        .then((data) => console.log("data: ",data));

};

searchBtn.addEventListener("click", formSubmitHandler);


// https://api.nytimes.com/svc/books/v3/reviews.json?api-key=

// rOks7u7aABNkDxOUutMyH0ZGf3ixyGWm

// AyMlAvgR8kDM9SOMERKkD0wyBCc1Hr1q

const findBook = function (bookName) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
      // Converts the response to JSON
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        
      const listSearch = response.items;
  
      let template ="";
      listSearch.forEach((item) => {
          template += `
          <div class="card">
              <div class="card-content">
              <div class="media">
                  <div class="media-left">
                  <figure class="image is-48x48">
                      <img src="${item.volumeInfo.imageLinks.smallThumbnail}" alt="Placeholder image">
                  </figure>
                  </div>
                  <div class="media-content">
                  <p class="title is-4"></p>
                  <p class="subtitle is-6">@johnsmith</p>
                  </div>
              </div>
          
              <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
              </div>
          </div>
          `;

          fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookName}&api-key=${apiKey}`)
          // Converts the response to JSON
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            
          const reviewSearch = response.items;
      
          let template ="";
          reviewSearch.forEach((item) => {
              template += `
              <div class="card">
                  <div class="card-content">
                  <div class="media">
                      <div class="media-right">
                      <figure class="image is-48x48">
                          <img src="" alt="Placeholder image">
                      </figure>
                      </div>
                      <div class="media-content">
                      <p class="title is-4"></p>
                      <p class="subtitle is-6">@johnsmith</p>
                      </div>
                  </div>
              
                  <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="${item.results.url}">#css</a> New York Times Review<a href="#">#responsive</a>
                      <br>
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                  </div>
              </div>
              `;
      });

      
  
        // YOUR CODE HERE
        document.querySelector(".results-container").innerHTML = template;
      }); 
    })
  })
};
