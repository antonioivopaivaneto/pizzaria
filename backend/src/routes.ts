import {Router,Request,Response} from 'express'
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticate } from './middlewares/isAuthenticate';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ShowAllCategoryController } from './controllers/category/ShowAllCateforyController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import uploadConfig from './config/multer';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';

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
router.get('/category/product',isAuthenticate, new ListByCategoryController().handle)

// --order routes
router.post('/order',isAuthenticate,new CreateOrderController().handle)
router.delete('/order',isAuthenticate,new RemoveOrderController().handle)
router.post('/order/add',isAuthenticate,new AddItemController().handle)
router.delete('/order/remove',isAuthenticate,new RemoveItemController().handle)



export {router}