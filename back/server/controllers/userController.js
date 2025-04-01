const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { email, role, username, password, nombre, apellido, foto } =
      req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario ya está en uso." });
    }

    // Crear usuario
    const newUser = new User({
      email,
      role,
      username,
      password,
      nombre,
      apellido,
      foto,
    });

    // Guardar en la base de datos
    await newUser.save();

    res.status(201).json({ message: `User ${username} created successfully` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear usuario.", error: error.message });
  }
};

const validateUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar usuario por username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.json({ username: user.username });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error en la autenticación", error: error.message });
  }
};

module.exports = { validateUser, createUser };
