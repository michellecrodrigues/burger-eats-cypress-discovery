var faker = require('faker')
var cpf = require ('gerador-validador-cpf')

export default{
    deliver:function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21888888888',
            address: {
                postalcode: '25060290',
                street: 'Rua Benfica',
                number: 'n/a',
                details: 'Atrás de tu',
                district: 'Vila Leopoldina',
                city_state: 'Duque de Caxias/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}