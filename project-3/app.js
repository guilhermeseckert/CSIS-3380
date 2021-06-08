const express = require("express");
const app = express();


var projects = [
  {
    id: "0",
    name: "Github_Explorer",
    image: ["https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png", "https://github.com/guilhermeseckert/Github_Explorer/raw/master/img/gitexplorer.png"],
    description: "Responsive Git Explorer for study purposes.",
    technologies: ["Reactjs", "Nodejs", "axios"],
    demo: "https://guilhermegitexplorer.netlify.app/",
    link: "https://github.com/guilhermeseckert/Github_Explorer"

  },
  {
    id: "1",
    name: "Twitter Clone",
    image: ["https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png", "https://github.com/guilhermeseckert/Twitter-Clone/raw/master/img/twitter.png"],
    technologies: ["Reactjs", "Nodejs", "Typescript"],
    demo: "https://twitter-clone-guilherme-509609.netlify.app/",
    description: "Tweet User registry Upload Avatar / Banner Tweet management",
    link: "https://github.com/guilhermeseckert/Twitter-Clone"

  }
];

app.set('view engine', 'pug')
app.use("/static", express.static("public"));

app.get("/", function (req, res, next) {

  res.render("index", {
    projects: projects
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects/:id", (req, res, next) => {

  const { id } = req.params;

  if (id === null || id > projects.length - 1) {

    return next();

  } else {

    const project = projects[id];

    res.render("project", { project });
  }
});

app.use( (req, res, next) => {
  res.status(404).send('<img src="https://www.lifewire.com/thmb/KRWNaXsGSTOz_NMB485Cql7MAI8=/1500x999/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-b5abe50f71c1433e8112ba57b5de5346.png"/>');
})
   
app.use( (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});


