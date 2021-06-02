// Using the Express Module
const express = require('express')
const app = express()


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
app.get('/task', async (req, res) => {
    const allTask = await task.findAll()

    // Usando SQLite puro
    // const allTasks = await sequelize.query('SELECT * FROM Tasks')

    res.json({ action: 'Lista de tarefas', product: allTask })
})

// Show a specific product using GET
app.get('/task/:id', async (req, res) => {

    const taskId = req.params.id
    const task = await task.findByPk(taskId)
    res.send({ action: 'Procurando tarefa', tarefas: task })
})

// Creating a products by using POST
app.post('/task', async (req, res) => {
    const body = req.body

    const newTask = await task.create({

        name: body.name,
        descricao: body.descricao,
        realizada: body.realizada
        
    })

    res.json({ action: 'Nova tarefa adicionada', tarefa: newTask })
})

// Updating a product by using PUT
app.put('/task/:id', async (req, res) => {
    const taskId = req.params.id
    const body = req.body
    const updateTask = await task.findByPk(taskId)
    updateTask.update({
        name: body.name,
        descricao: body.descricao,
        realizada: body.realizada
    })

    res.send({ action: 'Tarefa modificada', product: updateTask })
})

// Delete a product
app.delete('/task/:id', async (req, res) => {
    const taskId = req.params.id
    const deletingtask = await task.destroy({ where: { Id: taskId } })

    res.send({ action: 'Deletando tarefa', tasktId: taskId, deletandotask: deletingtask })
})


app.listen(8080, () => {
    console.log('Starting ExpressJS in the 8080 port')
})