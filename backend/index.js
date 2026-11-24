const express = require('express')
const Employees = require('./modelos/Employees')
const sequelize = require('./conexion/db')

const app = express() 

app.use(express.json())


// la ruta
// metodo (GET, post, put, delelt,e patch)
// entrada - salida request, reponse
// codigo respuesta

//select SUM(SALARY) as 'Suma Salario por Depto',department_id from employees group by department_id;
app.get('/sum-salary-by-depto', async (req, resp) => {


    try {

        const result = await Employees.findAll({

            attributes: [
                'department_id',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'total_salario']
            ],
            group: ['department_id']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

//select count(*), department_id,job_id from employees group by department_id, job_id;

app.get('/count-by-deparment-job', async (req, resp) => {


    try {

        const result = await Employees.findAll({

            attributes: [
                'department_id',
                'job_id',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_count']
            ],
            group: ['department_id', 'job_id']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});
// select MAX(SALARY),department_id from employees where department_id = 50 group by department_id

app.get('/max-salary-by-deparment/:deparmentId', async (req, resp) => {


    try {

        const result = await Employees.findAll({

            attributes: [
                'department_id',
                [sequelize.fn('MAX', sequelize.col('SALARY')), 'max_salary']
            ],
            where: { department_id: req.params.deparmentId },
            group: ['department_id']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

app.get('/count-product-by-valuecurrency', async (req, resp) => {


    try {

        const result = await Product.findAll({

            attributes: [
                'valueCurrency',
                [sequelize.fn('COUNT', sequelize.col('*')), 'productos_por_tipo_de_moneda']
            ],
            group: ['valueCurrency']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

app.get('/avg-product-by-valuecurrency', async (req, resp) => {


    try {

        const result = await Product.findAll({

            attributes: [
                'valueCurrency'
                [sequelize.fn('AVG', sequelize.col('value')), 'promedio_productos_por_tipo_moneda']
            ],
            group: ['valueCurrency']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});
app.get('/avg-n-count-product-by-linecode', async (req, resp) => {

    try {

        const result = await Product.findAll({

            attributes: [
                'lineCode',
                [sequelize.fn('AVG', 'COUNT', sequelize.col('VALUE', '*')), 'valor_promedio', 'cantidad_productos']
            ],
            group: ['lineCode']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }

    } catch (error) {

        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

app.listen(5000, () => {
    console.log('ejecutando backend')
})