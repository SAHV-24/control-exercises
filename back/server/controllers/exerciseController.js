const Exercise = require("../models/Exercise");
const cloudinary = require("../config/cloudinaryConfig"); // Archivo de configuración de Cloudinary

// Crear un nuevo ejercicio
exports.createExercise = async (req, res) => {
  try {
    // await newExercise.save();
    res.status(201).json({ message: "Ejercicio creado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el ejercicio", error });
  }
};

// Obtener todos los ejercicios
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();

    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener ejercicios", error });
  }
};

// Obtener un ejercicio por ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise)
      return res.status(404).json({ message: "Ejercicio no encontrado" });
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el ejercicio", error });
  }
};

// Eliminar un ejercicio
exports.deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!deletedExercise)
      return res.status(404).json({ message: "Ejercicio no encontrado" });

    res.json({ message: "Ejercicio eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el ejercicio", error });
  }
};
