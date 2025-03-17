const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");
const upload = require("../middlewares/multerConfig");

router.post("/", upload.single("image"), exerciseController.createExercise);
router.get("/", exerciseController.getAllExercises);
router.get("/:id", exerciseController.getExerciseById);
router.put("/:id", upload.single("image"), exerciseController.updateExercise);
router.delete("/:id", exerciseController.deleteExercise);

module.exports = router;
