const mongoose = require('mongoose');

const exerciseTypeSchema = new mongoose.Schema({
  exerciseId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Exercise', 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['ecuación', 'texto', 'lista', 'opción múltiple', 'selección única'], 
    required: true 
  },
  respuesta: { 
    type: String // Respuesta correcta o formato de respuesta esperado  
  },
  posiblesRespuestas: { 
    type: [String] // Útil para opciones múltiples o selección única  
  },
  imagen: { 
    type: String // URL de la imagen asociada, si aplica  
  }
}, { timestamps: true });

module.exports = mongoose.model('ExerciseType', exerciseTypeSchema);
