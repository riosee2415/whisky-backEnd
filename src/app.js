import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "../graphql/schema";
import bodyParser from "body-parser";

const app = express();

app.set(`port`, process.env.PORT);
app.use(morgan(`dev`));
connect();

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(app.get(`port`), () => {
  console.log(
    ` - 🍀 [WHISKY] GRAPHQL BACKEND SERVER START WITH MONGODB  PORT : ${process.env.PORT} 🍀 `
  );
});
