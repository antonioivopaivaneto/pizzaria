import {Router,Request,Response} from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticate } from './middlewares/isAuthenticate';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';

const router = Router();

// --category user

router.post('/users',new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAuthenticate, new DetailUserController().handle)

// --category routes
router.post('/category',isAuthenticate,new CreateCategoryController().handle)

export {router}