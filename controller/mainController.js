var Shop = require('../model/mainModel');

//create and save 
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send();
        return;
    }

    const shop = new Outfit({
        gen:req.body.gen,
        rank:req.body.rank,
        name:req.body.name,
        age:req.body.age,
        category:req.body.category,
        src:req.body.src,
    })

    shop
        .save(shop)
        .then(data => {
            //res.send(data)
            res.redirect('/main/add')
        })
        .catch(err=>{
            res.status(500)
        })
}

exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Shop.findById(id)
            .then(shop =>{
                if(!shop){
                    res.status(404).send({message: `Cannot find ${id}`})
                }else{
                    res.send(shop)
                }
            })
            .catch(err=>{
                res.status(500)
            })

    }else{
        Shop.find()
        .then(shop =>{
            res.send(shop)
        })
        .catch(err=>{
            res.status(500)
        })
    }
    
}

exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400)
    }
    const id = req.params.id;
    Shop.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(shop => {
            if(!shop){
                res.status(404).send({message: `Cannot find ${id}`})
            }else{
                res.send(shop)
            }
        })
        .catch(err =>{
            res.status(500)
        })
}

exports.delete = (req,res)=>{
    const id = req.params.id;

    Shop.findByIdAndDelete(id)
        .then(shop => {
            if(!shop){
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