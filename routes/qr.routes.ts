// Libs.
import express from 'express'
const router = express.Router()

import controllers from '../controllers'


router.post('/', controllers.qrController.createQr);
router.get('/:qrId', controllers.qrController.getQr);




export default router;
