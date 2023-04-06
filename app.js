const express = require("express");
const redis = require("redis");

const app = express();

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`,
});

redisClient.on("error", () => {
  console.log("An error occured");
});

redisClient.on("connect", () => {
  console.log("SUCCESSFULLY CONNECTED");
});

redisClient.connect();

app.get("/", async (req, res) => {
  try {
    const keyExists = await redisClient.exists("visits");

    if (keyExists) {
      const value = await redisClient.get("visits");
      res.send(`Number of visits: ${value}`);
      await redisClient.set("visits", parseInt(value) + 1);
    } else {
      await redisClient.set("visits", 0);
      const value = await redisClient.get("visits");
      res.send(`Number of visits: ${value}`);
      await redisClient.set("visits", parseInt(value) + 1);
    }
  } catch (error) {
    console.log(error.message);
    return res.send("Something went wrong!");
  }
});

app.listen(3000, () => console.log("App listenning on port 3000"));
