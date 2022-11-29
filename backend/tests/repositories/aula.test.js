import database from '../../database/database';
import repositories from '../../repositories/aula'

database.query = jest.fn()

test('Test Create Aula', () => {
    var id = repositories.createAula({})
    expect(database.query).toHaveBeenCalled()
});

test('Test Update Aula', () => {
    repositories.updateAula({})
    expect(database.query).toHaveBeenCalled()
});

test('Test Marcar Aula', () => {
    repositories.marcarAula({})
    expect(database.query).toHaveBeenCalled()
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.listAula({})
    expect(database.query).toHaveBeenCalled()
});

test('Test Update Aula', () => {
    var aula = {
        id: 1,
        dataAula: "00:00:00 17-12-2022",
        professor: "Pedro"
    };
    database.query.mockReturnValueOnce(aula)
    var aulaReturned = repositories.getAula(1)
    expect(database.query).toHaveBeenCalled()
});

test('Test List Aulas Filter Materia', () => {
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.getAulaFilter({
        materia: 'Portugues'
    })
    expect(database.query).toHaveBeenCalled()
});

test('Test List Aulas Filter Professor', () => {
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.getAulaFilter({
        professor: 'Portugues'
    })
    expect(database.query).toHaveBeenCalled()
});

test('Test List Aulas Filter Data', () => {
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.getAulaFilter({
        dataAula: '00:00:00 17-12-2022'
    })
    expect(database.query).toHaveBeenCalled()
});

test('Test List Aulas Filter Materia Professor', () => {
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.getAulaFilter({
        materia: 'Portugues',
        professor: 'Luis'
    })
    expect(database.query).toHaveBeenCalled()
});

test('Test List Aulas Filter Materia Data Aula', () => {
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.getAulaFilter({
        materia: 'Portugues',
        dataAula: '00:00:00 17-12-2022'
    })
    expect(database.query).toHaveBeenCalled()
});

test('Test List Aulas Filter Professor Data Aula', () => {
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
    database.query.mockReturnValueOnce(mockAulas)
    var aulas = repositories.getAulaFilter({
        professor: 'Portugues',
        dataAula: '00:00:00 17-12-2022'
    })
    expect(database.query).toHaveBeenCalled()
});