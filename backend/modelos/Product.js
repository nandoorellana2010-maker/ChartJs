
const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/db')

const Product = sequelize.define('product', {
    partNumber: {
        type: DataTypes.STRING
    },
    productType: {
        type: DataTypes.STRING
    },
    categoryCode: {
        type: DataTypes.STRING
    },
    brandCode: {
        type: DataTypes.STRING
    },
    familyCode: {
        type: DataTypes.STRING
    },
    lineCode: {
        type: DataTypes.STRING
    },
    productSegmentCode: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.NUMBER
    },
    valueCurrency: {
        type: DataTypes.STRING
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    plannerCode: {
        type: DataTypes.STRING
    },
    sourceLink: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'product',
    timestamps: false
})

module.exports = Product