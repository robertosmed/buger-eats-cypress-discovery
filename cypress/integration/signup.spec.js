import signup from '../pages/SignupPages'
import signupFactory from '../factories/SignupFactory'
import SignupPages from '../pages/SignupPages'

describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    // beforeEach (function(){
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste');
    // })

    // after (function(){
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes');
    // })

    // afterEach (function(){
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste');
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()


        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')


    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', outuput: 'É necessário informar o nome' },
            { field: 'cpf', outuput: 'É necessário informar o CPF' },
            { field: 'email', outuput: 'É necessário informar o email' },
            { field: 'postalcode', outuput: 'É necessário informar o CEP' },
            { field: 'number', outuput: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', outuput: 'Selecione o método de entrega' },
            { field: 'cnh', outuput: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.outuput)
            })
        })
    })
})