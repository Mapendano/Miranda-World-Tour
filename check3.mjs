fetch('https://archive.org/advancedsearch.php?q=title%3A%22gymnopedie%22+AND+mediatype%3Aaudio&fl%5B%5D=identifier&sort%5B%5D=downloads+desc&rows=5&page=1&output=json')
.then(r => r.json())
.then(json => {
  console.log(json.response.docs);
});
