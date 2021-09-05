var userFormEl = document.querySelector("#book");
var searchBtn = document.querySelector(".search");

var bookResult = userFormEl.value;
console.log(bookResult);

var formSubmitHandler = function (event) {
  event.preventDefault();

  var bookResult = userFormEl.value.trim();
  console.log(bookResult);
    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + bookResult + "&maxResults=20&printType=books&orderBy=relavance")
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
