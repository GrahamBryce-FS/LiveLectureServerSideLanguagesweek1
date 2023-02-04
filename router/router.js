const express = require("express");
const router = express.Router();

// http://localhost:2000/examples/get
router.get("/get", (req,res)=>{
    res.status(200).json({
        message: "Using Get",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//patch
router.patch('/patch/:id', (req,res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Using Get",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// get by id
router.get("/get/:id", (req,res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Using Get",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});
module.exports = router;



// router.post
// router.patch,
// router.put, 
// router.delete