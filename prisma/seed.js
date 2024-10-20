import {PrismaClient} from '@prisma/client'

import {$fetch} from 'ofetch'

const prisma = new PrismaClient()
const productURL = 'https://fakestoreapi.com/products'

const products = await $fetch(productURL)

const seedProducts = async () => {
    try {
        products.forEach(async product => {
            await prisma.products.create({
                data: {
                    title: product.title,
                    description: product.description,
                    image: product.image,
                    category: product.category,
                    price: product.price
                }
            })
        })
    }catch(err){
        console.error('Error seeding products:', err)
    }finally{
        await prisma.$disconnect()
    }
}

seedProducts()