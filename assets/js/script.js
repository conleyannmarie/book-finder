fetch("https://developers.google.com/books/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  fetch("https://developer.nytimes.com/docs/books-product/1/overview", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));