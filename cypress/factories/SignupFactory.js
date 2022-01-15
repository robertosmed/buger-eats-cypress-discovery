var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName() 

        var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '8112345678',
            address:{
                postalcode:'55006040',
                street: 'Rua Dom Severino Vieira de Melo',
                number: '108',
                details: 'ap 02',
                district: 'São Francisco',
                city_state:'Caruaru/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        
        return data
    }
}