import {Router,Request,Response} from 'express'
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticate } from './middlewares/isAuthenticate';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ShowAllCategoryController } from './controllers/category/ShowAllCateforyController';
import { CreateProductController } from './controllers/product/CreateProductController';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// --category user

router.post('/users',new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAuthenticate, new DetailUserController().handle)

// --category routes
router.post('/category',isAuthenticate,new CreateCategoryController().handle)
router.get('/category',isAuthenticate,new ShowAllCategoryController().handle)

// --products routes
router.post('/product',isAuthenticate,upload.single('file'), new CreateProductController().handle)

export {router}