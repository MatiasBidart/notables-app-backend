const uuid = require('uuid')
const {faker} = require('@faker-js/faker')
const Users = require('../../models/users.models')

Recipes.bulkCreate([{
    id: '12425',
    name: 'Grisines',
    stock: 8,
    img: 'www.url-img.com'
},
    {
    id: '12425',
    name: 'Azucarx25kg',
    stock: 12,
    img: 'www.url-img.com'
    },
    {
    id: '12425',
    name: 'Panceta Ahumada',
    stock: 14,
    img: 'www.url-img.com'
    }
]);