import { Response,Request } from "express";
import { ListByCategoryService } from "../../services/category/ListByCategoryService";

class ListByCategoryController{
    async handle(req:Request, res: Response){
        const category_id = req.query.category_id as string

        const listbyCategory = new ListByCategoryService();

        const products = await listbyCategory.execute({category_id})


    return res.json(products)
        

    }
}

export {ListByCategoryController}