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

