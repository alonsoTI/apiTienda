const express = require("express")
const router = express.Router();
const cursosModel = require("../models/cursos")

//get
router.get("/cursos", (req, res) => {
    cursosModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
})

router.post("/cursos", (req, res) => {
    const cursos = cursosModel(req.body);
    cursos.save()
    .then((data) => res.json({mensaje: "curso guardado correctamente"}))
    .catch((error) => res.json(error))
})

module.exports = router;