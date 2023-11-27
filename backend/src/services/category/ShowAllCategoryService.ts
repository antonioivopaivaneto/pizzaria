import prismaClient from "../../prisma";

class ShowAllCategoryService{

    async execute(){

        const allCategory = prismaClient.category.findMany();

        return allCategory;

    }

}

export { ShowAllCategoryService}