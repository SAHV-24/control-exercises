const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const topicRoutes = require("./routes/topicRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

console.log("URI\n\n\n", uri);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use("/", (req, res) => {
//   res.send(`
//     <h1>API de la aplicación de ejercicios</h1>

//     <p>"No te preocupes, por aquí, puedes empezar a usar Postman haciendo peticiones a /exercises/ o /topics/ o /users/"</p>

//     <h2>Endpoints:</h2>
//     <ul>
//       <li>GET /exercises</li>
//       <li>GET /exercises/:id</li>
//       <li>POST /exercises</li>
//       <li>PUT /exercises/:id</li>
//       <li>DELETE /exercises/:id</li>
//       <li>GET /users</li>
//       <li>GET /users/:id</li>
//       <li>POST /users</li>
//       <li>DELETE /users/:id</li>
//       <li>GET /topics</li>
//       <li>GET /topics/:id</li>
//       <li>POST /topics</li>
//       <li>PUT /topics/:id</li>
//       <li>DELETE /topics/:id</li>

//     </ul>

//     `);
// });
app.use("/users", userRoutes);
app.use("/topics", topicRoutes);
app.use("/exercises", exerciseRoutes);

app.listen(5000, () =>
  console.log(
    "\n\n\nEl servidor está corriendo en el puerto 5000\n Puedes acceder a la API en http://localhost:5000\n\n\n"
  )
);
