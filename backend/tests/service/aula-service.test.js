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
    aulaService.updateAula({})
    expect(aulaRepo.updateAula).toHaveBeenCalled()
});

test('Test Marcar Aula', () => {
    aulaService.marcarAula({})
    expect(aulaRepo.marcarAula).toHaveBeenCalled()
});

test('Test List Aulas', () => {
    var mockAulas = {
        result: [
            {
                id: 1,
                dataAula: "00:00:00 17-12-2022",
                professor: "Pedro"
            },
            {
                id: 2,
                dataAula: "00:00:00 17-12-2022",
                professor: "Pedro"
            }
        ]
    };
    aulaRepo.listAula.mockReturnValueOnce(mockAulas)
    var aulas = aulaService.listAula({})
    expect(aulas).toBe(mockAulas)
});

test('Test Update Aula', () => {
    var aula = {
        id: 1,
        dataAula: "00:00:00 17-12-2022",
        professor: "Pedro"
    };
    aulaRepo.getAula.mockReturnValueOnce(aula)
    var aulaReturned = aulaService.getAula(1)
    expect(aulaReturned).toBe(aula)
});

test('Test List Aulas', () => {
    var mockAulas = {
        result: [
            {
                id: 1,
                dataAula: "00:00:00 17-12-2022",
                professor: "Pedro"
            },
            {
                id: 2,
                dataAula: "00:00:00 17-12-2022",
                professor: "Pedro"
            }
        ]
    };
    aulaRepo.getAulaFilter.mockReturnValueOnce(mockAulas)
    var aulas = aulaService.getAulaFilter({})
    expect(aulas).toBe(mockAulas)
});