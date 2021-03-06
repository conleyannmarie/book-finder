//beginning variables
var userFormEl = document.querySelector("#book");
var searchBtn = document.querySelector(".search");

var bookResult = userFormEl.value;
console.log(bookResult);

var formSubmitHandler = function (event) {
  event.preventDefault();

  var bookResult = userFormEl.value.trim();
  findBook(bookResult);
  console.log(bookResult);

  //fetch request for google books
    fetch(
    "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
      bookResult +
      "&maxResults=20&printType=books&orderBy=relevance"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

searchBtn.addEventListener("click", formSubmitHandler);

const apiKey = "rOks7u7aABNkDxOUutMyH0ZGf3ixyGWm";

var formSubmitHandler = function (event) {
  event.preventDefault();

  var bookResult = userFormEl.value.trim();
  console.log(bookResult);

  //fetch request nytimes
  const query = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookResult}&api-key=${apiKey}`;

  fetch(query)
    .then((response) => response.json())
    .then((data) => console.log("data: ", data));
};

searchBtn.addEventListener("click", formSubmitHandler);

// https://api.nytimes.com/svc/books/v3/reviews.json?api-key=

// rOks7u7aABNkDxOUutMyH0ZGf3ixyGWm

//display books
const findBook = function (bookName) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
    // Converts the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const listSearch = response.items;
      //card block to display
      let template = "";
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
                  <p class="subtitle is-6">${item.volumeInfo.authors}</p>
                  </div>
              </div>
          
              <div class="content">
                  ${item.volumeInfo.description}
              </div>
              </div>
          </div>
          `;

            // YOUR CODE HERE
            document.querySelector("#results-container").innerHTML = template;
          });
      });

      //new york times display card

      fetch(
        `https://api.nytimes.com/svc/books/v3/reviews.json?title=${bookName}&api-key=${apiKey}`
      )
        // Converts the response to JSON
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          const reviewSearch = response.results;

          let template = "";
          reviewSearch.forEach((item) => {
            template += `
            <div class="card">
                <div class="card-content">
                <div class="media">
                    <div class="media-right">
                    </div>
                    <div class="media-content">
                    <p class="title is-4"></p>
                    <p class="subtitle is-6">${item.book_title}</p>
                    </div>
                </div>
            
                <div class="content">
                <a></a>.
                    <a href="${item.url}">Click here to read the New York Times Review for this book</a> <a href="#"></a>
                    <br>
                </div>
                </div>
            </div>
            `;
          });

          document.querySelector("#results-container-2").innerHTML = template;

            });
        };
          searchBtn.addEventListener("click", formSubmitHandler);
