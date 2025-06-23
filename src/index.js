import { calcAll, addItem, deleteItem, removeItem, seeCard } from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Welcome to cardStorage !!!")

const item = await createItem(1, "Calça", 40.0, 1)
const item2 = await createItem(2, "Camiseta", 34.0, 2)
const item3 = await createItem(3, "Carrinho", 80.0, 1)

addItem(myCart, item)
addItem(myCart, item2)
addItem(myCart, item3)

// await deleteItem(myCart, item3.name)
await removeItem(myCart, 1)
await seeCard(myCart)

calcAll(myCart)