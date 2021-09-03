fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:flowers&key=AIzaSyCLeDEOIA4bhAKyhvgumkaPe-q5PWtLT4c")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rOks7u7aABNkDxOUutMyH0ZGf3ixyGWm")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));