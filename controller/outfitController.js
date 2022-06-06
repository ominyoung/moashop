var Outfit = require('../model/outfitModel');

//create and save 
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send();
        return;
    }

    const outfit = new Outfit({
        nickname:req.body.nickname,
        title:req.body.title,
        content:req.body.content,
        file:req.body.file,
    })

    outfit
        .save(outfit)
        .then(data => {
            res.send(data)
        })
        .catch(err=>{
            res.status(500)
        })
}

exports.find = (req,res)=>{
    Outfit.find()
        .then(outfit =>{
            res.send(outfit)
        })
        .catch(err=>{
            res.status(500)
        })
}

exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400)
    }
    const id = req.params.id;
    Outfit.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(outfit => {
            if(!outfit){
                res.status(404).send({message: `Cannot find ${id}`})
            }else{
                res.send(outfit)
            }
        })
        .catch(err =>{
            res.status(500)
        })
}

exports.delete = (req,res)=>{
    const id = req.params.id;

    Outfit.findByIdAndDelete(id)
        .then(outfit => {
            if(!outfit){
                res.status(404).send({message: `Cannot find ${id}`})
            }else{
                res.send({
                    message:"Delete Success"
                })
            }
        })
        .catch(err => {
            res.status(500)
        })
}