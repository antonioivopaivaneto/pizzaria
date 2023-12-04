import prismaClient from "../../prisma";

interface ItemRequest{
    order_id:string;
    product_id:string;
    amount:number;

}
class AddItemService{
    async execute({product_id,order_id,amount}:ItemRequest){

        const order = await prismaClient.item.create({
            data:{
                order_id:order_id,
                product_id:product_id,
                amount
            }
        })


        return order

    }
}

export {AddItemService}