import signup from '../pages/SignupPage'
import signFactory from '../factories/SignupFactory'
import SignUpPage from '../pages/SignupPage'

describe('Signup', () => {
/* 
    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })
     */
    it('User should be deliver', function () {

        var deliver = signFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signFactory.deliver()

        deliver.cpf = '1234567aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = signFactory.deliver()

        deliver.email = 'teste.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
        

    })

    //linha de código abaixo executa os casos de testes mesmo que um deles apresente erro.
    context('Required fields', function(){

        const messages = [
        {field:'name', output:'É necessário informar o nome'},
        {field:'cpf', output: 'É necessário informar o CPF'},
        {field:'email', output: 'É necessário informar o email'},
        //{field:'email', output: 'É necessário informar o e-mail'}, Exemplo: campo email com hifen os demais testes continuam executando. Esse tipo de recurso evita acrescimos de it
        {field:'postalcode', output: 'É necessário informar o CEP'},
        {field:'number', output: 'É necessário informar o número do endereço'},
        {field:'delivery_method', output: 'Selecione o método de entrega'},
        {field:'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signup.go()
            signup.submit() 
        })

        messages.forEach(function(msg){
            it(`${msg.fied} is required`, function(){
                SignUpPage.alertMessageShouldBe(msg.output)
            })
        })
    })


    /* it('Required fields', function(){
        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

    }) */
})