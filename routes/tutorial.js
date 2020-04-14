const express = require('express')
const router = express.Router()
const TutorialController = require('../controller/TutorialController')

router.post('/register/tutorial' , TutorialController.registerTutorial)

router.get('/fetch/tutorial' , TutorialController.fetchAllTutorial)

router.get('/fetch/tutorial/:id', TutorialController.fetchOneTutorial)

router.get('/fetch/tutorial/:id' , TutorialController.updateTutorial)

router.delete('/delete/tutorial/:id' , TutorialController.deleteTutorial)

router.get('/published/tutorial/:published' , TutorialController.fetchPublishedTutorial)

module.exports = router