import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import category from "./routes/category.js"
import cors from "cors"; 

const app = express();
app.use(cors());
const port = 2000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WebApi demo api",
      version: "1.0.0",
    },
  },
  apis: ["./index.js",
        "./routes/*.js"],
};

const openapiSpec = swaggerJSDoc(options);
const UIoptions = {
  explorer: true,
};

app.use(express.json());
app.use("/category", category);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpec, UIoptions));

/**
 * @openapi
 * /:
 *  get:
 *      description: Manual document
 *      responses:
 *          200:
 *              description: Manual documentation in HTML format.
 *          500:
 *              description: Error parsing...
 */
app.get("/", (req, res) => {
  res.send("Hello Worldaaaaaaaaaaaaaaaa!");
});

/**
 * @openapi
 * /products:
 *  get:
 *      description: Welcome swagger
 *      responses:
 *          200:
 *              description: Returns a mysterious
 */
app.get("/products", (req, res) => {
  res.send(
    '{"products":[{"id":"1", "name":"Product1"}, {"id":"2", "name":"Product2"} ]}'
  );
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
