// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(express.json());

const petList = [
  {
    name: "jingle",
    type: "cat",
    age: "2",
    color: "brown",
    img_src:
      "https://cdn.glitch.com/288f5934-8c59-4989-a328-c65c29a3cd68%2Fthumbnails%2Fblack-cat.jpg?1597690122770"
  },
  {
    name: "bell",
    type: "cat",
    age: "1",
    color: "black",
    img_src:
      "https://cdn.glitch.com/288f5934-8c59-4989-a328-c65c29a3cd68%2Fthumbnails%2Fbrown-cat.jpg?1597690137561"
  },
  {
    name: "dorky",
    type: "dog",
    age: "2",
    color: "white",
    img_src:
      "https://cdn.glitch.com/288f5934-8c59-4989-a328-c65c29a3cd68%2Fthumbnails%2Fwhite-dog.jpg?1597690144214"
  },
  {
    name: "diffy",
    type: "dog",
    age: "1",
    color: "black",
    img_src:
      "https://cdn.glitch.com/288f5934-8c59-4989-a328-c65c29a3cd68%2Fthumbnails%2Fblack-dog.jpg?1597690131238"
  }
];

app.use(helmet());
app.use(express.json());
app.use(express.static("views"));

app.get("/api/see-pet-list", (req, res) => {
  if (req.query.type) {
    let request = req.query.type;
    let filteredList = petList.filter(p => p.type == request);
    res.send(filteredList);
  } else {
    res.send(petList);
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
