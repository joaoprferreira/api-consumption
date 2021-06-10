const express = require("express");

const cors = require("cors");

const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", async (request, response) => {
  try{
    const { data } = await axios("https://jholder.typicode.com/users");
  } catch(error) {
    console.error(error)
  }
  
  
  console.log(data)
  return response.json(data);
});

app.listen("3333");
