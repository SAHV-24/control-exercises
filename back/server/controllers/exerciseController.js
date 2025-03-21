const Exercise = require("../models/Exercise");
const cloudinary = require("../config/cloudinaryConfig"); // Archivo de configuración de Cloudinary

// Crear un nuevo ejercicio
exports.createExercise = async (req, res) => {
  try {
    const { title, description, answer, answerDescription, topicId } = req.body;
    let image = null;

    // Subir imagen a Cloudinary si existe
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      image = result.secure_url;
    }

    const newExercise = new Exercise({
      title,
      description,
      answer,
      answerDescription,
      topicId,
      imageUrl: image,
    });

    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el ejercicio", error });
  }
};

// Obtener todos los ejercicios
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find().populate("topicId");
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener ejercicios", error });
  }
};

// Obtener un ejercicio por ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id).populate("topicId");
    if (!exercise)
      return res.status(404).json({ message: "Ejercicio no encontrado" });
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el ejercicio", error });
  }
};

// Actualizar un ejercicio
exports.updateExercise = async (req, res) => {
  try {
    const { title, description, answer, answerDescription, topicId } = req.body;
    let imageUrl = req.body.imageUrl; // Mantener la imagen actual si no se sube una nueva

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      { title, description, answer, answerDescription, topicId, imageUrl },
      { new: true }
    );

    if (!updatedExercise)
      return res.status(404).json({ message: "Ejercicio no encontrado" });
    res.json(updatedExercise);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el ejercicio", error });
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
