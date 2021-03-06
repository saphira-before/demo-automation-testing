describe('Cadastro', function (){
  it('Cadastrar novo registro com sucesso', function (){
    cy.visit('http://demo.automationtesting.in/Register.html')

    cy.get('input[placeholder="First Name"]')
      .type('Saphira')// First Name

    cy.get('input[placeholder="Last Name"]')
      .type('Xavier')// Last Name

    cy.get('textarea[rows="3"]') // address
      .type('Automação testes Mentoria QA 12345 !@#$%&&*$##')
    
    cy.get('input[type="email"]') //email
      .type('teste@gmail.com')
    
    cy.get('input[type="tel"]') //phone
      .type('5417543010')
   
    cy.get('input[value="FeMale"]').click() //genêro

    cy.get('input[value="Movies"]').click() //hobbies
    
    cy.get('#msdd').click() //línguas
      
    cy.get('li a').contains("Portuguese").click()
    
    cy.get('li a').contains("English").click()
      
    cy.get('#checkbox2').click() 
                                    //necessários para fechar o campo languages    
    cy.get('#checkbox2').click()

    cy.get('select[id="Skills"]') //habilidades
      .select("Adobe Photoshop")

    cy.get('select[id="countries"]') //país
      .select("Brazil")  
    
    cy.get('span[role="combobox"]').click() //outro país

    cy.get('ul li').contains("Bangladesh").click()
      
    cy.get('select[id="yearbox"]') //ano
      .select("1988")
      
    cy.get('select[placeholder="Month"]') //mês
      .select("October")
      
    cy.get('select[placeholder="Day"]') //dia
      .select("14")

    cy.get('input[id="firstpassword"]') //senha
      .type("Ertar1345%")
   
    cy.get('input[id="secondpassword"]') //confirmar senha
      .type("Ertar1345%")   

    cy.get('button[id="submitbtn"]').click()

    cy.url().should('include', '/WebTable.html') //verifica se a nova URL tem /WebTable.html
    
    })
})
