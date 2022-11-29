import aulaRepo from '../../repositories/aula';
import aulaService from '../../services/aula-service'

aulaRepo.createAula = jest.fn()
aulaRepo.updateAula = jest.fn()
aulaRepo.listAula = jest.fn()
aulaRepo.getAula = jest.fn()
aulaRepo.marcarAula = jest.fn()
aulaRepo.getAulaFilter = jest.fn()

test('Test Create Aula', () => {
    aulaRepo.createAula.mockReturnValueOnce(1)
    var id = aulaService.createAula({})
    expect(id).toBe(1)
});

test('Test Update Aula', () => {
    var id = aulaService.updateAula({})
    expect(aulaRepo.updateAula).toHaveBeenCalled()
});

test('Test Update Aula', () => {
    var id = aulaService.updateAula({})
    expect(aulaRepo.updateAula).toHaveBeenCalled()
});

test('Test Update Aula', () => {
    var id = aulaService.updateAula({})
    expect(aulaRepo.updateAula).toHaveBeenCalled()
});

test('Test Update Aula', () => {
    var id = aulaService.updateAula({})
    expect(aulaRepo.updateAula).toHaveBeenCalled()
});

test('Test Update Aula', () => {
    var id = aulaService.updateAula({})
    expect(aulaRepo.updateAula).toHaveBeenCalled()
});