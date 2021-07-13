fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 0
  }),
  headers:  {'Content-Type': 'application/json; charset=UTF-8'  }
})