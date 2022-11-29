import perfilRepo from '../../repositories/perfil';
import perfilService from '../../services/perfil-service'

perfilRepo.login = jest.fn()
perfilRepo.createPerfil = jest.fn()
perfilRepo.getPerfil = jest.fn()
perfilRepo.getAulasMarcadas = jest.fn()
perfilRepo.updatePerfil = jest.fn()
perfilRepo.createAvaliacao = jest.fn()
perfilRepo.getAvaliacaoPerfil = jest.fn()

test('Test Login', () =>{
    perfilService.login({})
    expect(perfilRepo.login).toHaveBeenCalled()
});

test('Test Get Perfil', () =>{
    perfilService.getPerfil({})
    expect(perfilRepo.getPerfil).toHaveBeenCalled()
});

test('Test Get Aulas Marcadas', () =>{
    perfilService.getAulasMarcadas({})
    expect(perfilRepo.getAulasMarcadas).toHaveBeenCalled()
});

test('Test Create Perfil', () =>{
    perfilService.createPerfil({})
    expect(perfilRepo.createPerfil).toHaveBeenCalled()
});

test('Test Update Perfil', () =>{
    perfilService.updatePerfil({})
    expect(perfilRepo.updatePerfil).toHaveBeenCalled()
});

test('Test Get Avaliacao Perfil', () =>{
    perfilService.getAvaliacaoPerfil({})
    expect(perfilRepo.getAvaliacaoPerfil).toHaveBeenCalled()
});

test('Test Create Avaliacao', () =>{
    perfilService.createAvaliacao({})
    expect(perfilRepo.createAvaliacao).toHaveBeenCalled()
});

test('Test Calculate Avaliacao', () =>{
    var mockAvaliacoes = [{
        notaclaridade: 5,
        notapontualidade: 5,
        notasimplicidade:5
    },
    {
        notaclaridade: 4,
        notapontualidade: 4,
        notasimplicidade:4
    },
    {
        notaclaridade: 3,
        notapontualidade: 3,
        notasimplicidade:3
    }]

    var expectedReturn = {
        notaClareza: 4,
        notaSimplicidade: 4,
        notaPontualidade: 4,
    }
    
    var acturalReturn = perfilService.calculateAvaliacao(mockAvaliacoes, 3)

    expect(expectedReturn.notaClareza).toBe(acturalReturn.notaClareza)
    expect(expectedReturn.notaSimplicidade).toBe(acturalReturn.notaSimplicidade)
    expect(expectedReturn.notaPontualidade).toBe(acturalReturn.notaPontualidade)

});
