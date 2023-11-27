import { Request, Response } from "express";
import { ShowAllCategoryService } from "../../services/category/ShowAllCategoryService";


class ShowAllCategoryController {

    async handle(req: Request, res: Response){


        const showAllCategoryServices = new ShowAllCategoryService();

        const all =  await showAllCategoryServices.execute();

        return  res.json(all)
    }

}

export {ShowAllCategoryController}