describe('Função de busca de filmes', () => {
  it('deve retornar o filme digitado pelo usuário', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input').type('Harry Potter');
    cy.wait(1000);
    cy.get('button').click();
    cy.wait(1000);
    cy.get('h2').contains('Harry Potter');

    cy.wait(1000);

    cy.get('h2').contains('Harry Potter and the Order of the Phoenix').click();

    cy.wait(1000);

    cy.get('h1').contains(`Harry Potter and the Order of the Phoenix`);

    cy.get('.sinopse').contains(`Sinopse: With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.`);
    cy.get('.genero').contains(`Gênero: Action, Adventure, Family`);
    cy.get('.diretor').contains(`Diretor: David Yates`);
    cy.get('.atores').contains(`Atores: Daniel Radcliffe, Emma Watson, Rupert Grint`);
    cy.get('.idioma').contains(`Idioma: English, Latin`);

    cy.get('.lancamento').contains(`Lançamento: 11 Jul 2007`);
    cy.get('.duracao').contains(`Duração: 138 min`);
    cy.get('.avaliacao').contains(`Avaliação: 7.5`);

    cy.wait(2000);
    cy.get('.voltar').click();
  });
});
