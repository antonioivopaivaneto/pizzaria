import prismaClient from "../../prisma";

class ShowAllCategoryService{

    async execute(){

        const allCategory = prismaClient.category.findMany({
            select:{
                id:true,
                name:true
            }
        });

        return allCategory;

    }

}

export { ShowAllCategoryService}