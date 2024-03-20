const uuid = require('uuid')
const Users = require('../../models/user.models')

const seeder = ()=> {
    Users.create(
        {
            id: uuid.v4(),
            firstName: 'Admin',
            lastName: 'Root',
            email: 'example@email.com',
            password: 'root',
            role: 'admin',
            userStatus: 'disabled'
        }
    )
}
