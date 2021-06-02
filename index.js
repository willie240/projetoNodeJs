// Using the Express Module
const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

//Importing Sequeleze
const { Sequelize, DataTypes } = require('sequelize')
const TaskModel = require('./models/task')


// Connecting Sequelize with the database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'listaTarefas.db'
})

// Declaring the connection and the data type
const task = TaskModel(sequelize, DataTypes)


// We need to parse JSON coming from requests
app.use(express.json())


// Welcome Page
app.get('', (req, res) => {
    res.send('<html><body><h1>My Tasks List!</h1><p>Lista de tarefas</p></body></html>')
})

// Listing products by using GET
app.get('/products', async (req, res) => {
    const allProducts = await products.findAll()

    // Usando SQLite puro
    // const allTasks = await sequelize.query('SELECT * FROM Tasks')

    res.json({ action: 'Listing Products', product: allProducts })
})

// Show a specific product using GET
app.get('/products/:id', async (req, res) => {

    const productId = req.params.id
    const product = await products.findByPk(productId)
    res.send({ action: 'Showing Product', product: product })
})

// Creating a products by using POST
app.post('/products', async (req, res) => {
    const body = req.body

    const newProduct = await products.create({

        name: body.name,
        description: body.description,
        quantity: body.quantity,
        price: body.price,
        urlimg: body.urlimg,
        nonmeat: body.nonmeat,
        protein: body.protein,
        sauce: body.sauce,
        potatoes: body.potatoes,
        drink: body.drink
    })

    res.json({ action: 'New Product Added', product: newProduct })
})

// Updating a product by using PUT
app.put('/products/:id', async (req, res) => {
    const productId = req.params.id
    const body = req.body
    const updateProduct = await products.findByPk(productId)
    updateProduct.update({
        name: body.name,
        description: body.description,
        quantity: body.quantity,
        price: body.price,
        urlimg: body.urlimg,
        nonmeat: body.nonmeat,
        protein: body.protein,
        sauce: body.sauce,
        potatoes: body.potatoes,
        drink: body.drink
    })

    res.send({ action: 'Updated Product', product: updateProduct })
})

// Delete a product
app.delete('/products/:id', async (req, res) => {
    const productId = req.params.id
    const deletingProduct = await products.destroy({ where: { Id: productId } })

    res.send({ action: 'Deleted Product', productId: productId, productDeleted: deletingProduct })
})

app.post('/pedido', async (req, res) => {
    const body = req.body

    const newPedido = await pedido.create({


        tomate: body.tomate,
        cebola: body.cebola,
        alface: body.alface,
        cheedar: body.cheedar,
        milho: body.milho,
        batata_palha: body.batata_palha,
        pepino_japones: body.pepino_japones,
        carne: body.carne,
        frango: body.frango,
        calabresa: body.calabresa,
        presunto: body.presunto,
        bacon: body.bacon,
        ovo: body.ovo,
        batatas_fritas: body.batatas_fritas,
        coca_cola_2l: body.coca_cola_2l,
        coca_cola_350ml: body.coca_cola_350ml,
        fanta_guarana_2l: body.fanta_guarana_2l,
        fanta_laranja_2l: body.fanta_laranja_2l,
        fanta_uva_2l: body.fanta_uva_2l,
        sprite: body.sprite,
        coca_cola_600ml: body.coca_cola_600ml,
        mostarda: body.mostarda,
        ketchup: body.ketchup,
        maionese: body.maionese
    })

    res.json({ action: 'New Product Added', pedido: newPedido })
})

app.listen(8080, () => {
    console.log('Starting ExpressJS in the 8081 port')
})