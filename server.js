const express = require("express");
const app = express();
const port = 5500;
const trainees = [
  { name: "sabella", region: "north-west" },
  {
    name: "bella",
    region: "north",
  },
  {
    name: "fev",
    region: "london",
  },
];
app.get("/codeyourfuture", function (req, res) {
  console.log(req.query.region);
  const query = req.query.region;
  const filteredTrainees = trainees.filter((trainee) =>
    trainee.region.includes(query)
  );

  res.send({ trainees: filteredTrainees });
});
app.get("/", function (req, res) {
  res.send("hello there");
});

app.listen(port, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
