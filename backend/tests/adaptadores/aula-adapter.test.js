import aulaService from '../../services/aula-service';
import aulaAdapter from '../../adaptadores/aula-adapter'

aulaService.createAula = jest.fn()
aulaService.updateAula = jest.fn()
aulaService.listAula = jest.fn()
aulaService.getAula = jest.fn()
aulaService.marcarAula = jest.fn()
aulaService.getAulaFilter = jest.fn()

test('Test Create Aula', () => {
    aulaService.createAula.mockReturnValueOnce(1)
    var id = aulaAdapter.createAula({})
    expect(id).toBe(1)
});

test('Test Update Aula', () => {
    aulaAdapter.updateAula({})
    expect(aulaService.updateAula).toHaveBeenCalled()
});

test('Test Marcar Aula', () => {
    aulaAdapter.marcarAula({})
    expect(aulaService.marcarAula).toHaveBeenCalled()
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
    aulaService.listAula.mockReturnValueOnce(mockAulas)
    var aulas = aulaAdapter.listAula({})
    expect(aulas).toBe(mockAulas)
});

test('Test Update Aula', () => {
    var aula = {
        id: 1,
        dataAula: "00:00:00 17-12-2022",
        professor: "Pedro"
    };
    aulaService.getAula.mockReturnValueOnce(aula)
    var aulaReturned = aulaAdapter.getAula(1)
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
    aulaService.getAulaFilter.mockReturnValueOnce(mockAulas)
    var aulas = aulaAdapter.getAulaFilter({})
    expect(aulas).toBe(mockAulas)
});