import perfilService from '../../services/perfil';
import perfilAdapter from '../../adaptadores/perfil-adapter'

perfilService.login = jest.fn()
perfilService.createPerfil = jest.fn()
perfilService.getPerfil = jest.fn()
perfilService.getAulasMarcadas = jest.fn()
perfilService.updatePerfil = jest.fn()
perfilService.createAvaliacao = jest.fn()
perfilService.getAvaliacaoPerfil = jest.fn()

test('Test Login', () =>{
    perfilAdapter.login({})
    expect(perfilService.login).toHaveBeenCalled()
});

test('Test Get Perfil', () =>{
    perfilAdapter.getPerfil({})
    expect(perfilService.getPerfil).toHaveBeenCalled()
});

test('Test Get Aulas Marcadas', () =>{
    perfilAdapter.getAulasMarcadas({})
    expect(perfilService.getAulasMarcadas).toHaveBeenCalled()
});

test('Test Create Perfil', () =>{
    perfilAdapter.createPerfil({})
    expect(perfilService.createPerfil).toHaveBeenCalled()
});

test('Test Update Perfil', () =>{
    perfilAdapter.updatePerfil({})
    expect(perfilService.updatePerfil).toHaveBeenCalled()
});

test('Test Get Avaliacao Perfil', () =>{
    perfilAdapter.getAvaliacaoPerfil({})
    expect(perfilService.getAvaliacaoPerfil).toHaveBeenCalled()
});

test('Test Create Avaliacao', () =>{
    perfilAdapter.createAvaliacao({})
    expect(perfilService.createAvaliacao).toHaveBeenCalled()
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
    
    var acturalReturn = perfilAdapter.calculateAvaliacao(mockAvaliacoes, 3)

    expect(expectedReturn).toBe(acturalReturn)

});
