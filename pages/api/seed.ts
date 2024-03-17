// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  PrismaClient } from "@prisma";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  //   await prisma.table.deleteMany();
  await prisma.Restaurant.deleteMany();
  await prisma.Menu.deleteMany();
  await prisma.Item.deleteMany();




  try {
    // Borrar todos los datos existentes
    await prisma.comandaDetail.deleteMany();
    await prisma.comanda.deleteMany();
    await prisma.payment.deleteMany();
    await prisma.item.deleteMany();
    await prisma.menu.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.client.deleteMany();
    await prisma.restaurant.deleteMany();
  } catch (error) {
    console.error(error);
  }
}
