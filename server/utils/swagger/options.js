const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // specify the OpenAPI version
    info: {
      title: "User Management API with Swagger",
      version: "1.0.0",
      description: "Documentation for an User Management API with Swagger",
    },
  },
  // Paths to the API docs files
  apis: ["./routes/*.js", "./models/*.js"],
};

module.exports = swaggerOptions;
