const Tutorial = require('../database/models/'). Tutorial

class TutorialController{
    //Method to create new tutorial
    static registerTutorial(req, res){
        try{
            const{title, description, published} = req.body
            let tutorialData = {
                title: title,
                description: description,
                published: published
            }
            Tutorial.create(tutorialData).then(response=>{
                return res.status(200).json({
                    error: false,
                    message: 'Message Title created',
                    data: response
                })
            }).catch(err=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // method to read all tutorial
    static fetchAllTutorial(req, res){
        try{
            Tutorial.findAll().then(response=>{
                if(response.length > 0){
                    return res.status(200).json({
                        error: false,
                        message: 'These are all registered tutorial',
                        data: response
                    })
                }else{
                    return res.status(204).json({
                        error: true,
                        message: 'Tutorial not found',
                        data: []
                    })
                }
            }).catch(err=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // Method to read a particular tutorial
    static fetchOneTutorial(req, res){
        try{
            let id = req.params.id
            Tutorial.findOne({
                where : {id:id}
            }).then(response=>{
                if(response){
                    return res.status(200).json({
                        error:false,
                        message:'A single tutorial',
                        data:response
                    })
                }else{
                    return res.status(203).json({
                        error:true,
                        message:'No tutorial found',
                        data:[]
                    })
                }
                }).catch(err=>{
                    return res.send('error')
                })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // Method to update tutorial
    static updateTutorial(req, res){
        try{
            let id = req.params.id
            const{title, description, published}= req.body
            let tutorialUpdate = {
                title:title,
                description:description,
                published:published
            }
            Tutorial.update(tutorialUpdate , {
                where:{id:id}
            }).then(response=>{
                return res.status(200).json({
                    error:false,
                    message:'Tutorial updated',
                    data:response
                })
            }).catch(err=>{
                return  res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // How to delete a tutorial
    static deleteTutorial(req, res){
        try{
            let id = req.params.id
            Tutorial.destroy({
                where:{id:id}
            }).then(response=>{
                return res.status(200).json({
                    error:false,
                    message:'Tutorial deleted',
                    data:response
                })
            }).catch(error=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // method to view Tutorial by published
    static fetchPublishedTutorial(req, res){
        try{
            let published = req.params.published
            Tutorial.findAll({
                where:{published:published}
            }).then(response=>{
                if(response.length > 0){
                    return res.status(200).json({
                        error:false,
                        message:'These are all tutorial published registered',
                        data:response
                    })
                }else{
                    return res.status(200).json({
                        error:false,
                        message:'No tutorial found',
                        data:[]
                    })
                }
            }).catch(error=>{
                return res.send('Error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
}
module.exports = TutorialController