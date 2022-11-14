const pool = require('../database/database')

exports.listAula = async () => {
    var result = await pool.query('SELECT * FROM aula')
    return result
}

exports.getAula = async (idAula) => {
    var result = await pool.query('SELECT * FROM aula WHERE id=' + idAula)
    return result
}

exports.getAulaFilter = async (filtros) => {
    const query = 'SELECT * FROM aula'.concat(filtros.materia == null ? '' : ' WHERE materia = ' + '\'' + filtros.materia + '\'')
        .concat(checkProfessorMateriaFalse(filtros.professor, filtros.materia) ? '' : ' AND professor = ' + '\'' + filtros.professor + '\'')
        .concat(checkProfessorMateriaTrue(filtros.professor, filtros.materia) ? '' : ' WHERE professor = ' + '\'' + filtros.professor + '\'')
        .concat(checkProfessorDataTrue(filtros.professor, filtros.dataAula, filtros.materia) ? '' : ' AND dataAula = ' + '\'' + filtros.dataAula + '\'')
        .concat(checkProfessorDataFalse(filtros.professor, filtros.dataAula, filtros.materia) ? '' : ' WHERE dataAula = ' + '\'' + filtros.dataAula + '\'')
    return await pool.query(query)
}

exports.createAula = async (aulaToInsert) => {
    const id = await pool.query('insert into aula (materia, dataAula, professor) values ( ' + '\'' + aulaToInsert.materia + '\'' + ',\'' + aulaToInsert.dataAula + '\',' + '\'' + aulaToInsert.professor + '\'' + ') returning id')

    return id
}

exports.marcarAula = async (marcacao) => {
    return await pool.query('insert into perfilaula (idaula, idperfil) values ( ' + marcacao.idAula + ',' + marcacao.idPerfil + ')')
}

exports.updateAula = async (aulaToUpdate) => {
    const aula = await pool.query('UPDATE aula  SET  materia = ' + '\'' + aulaToUpdate.materia + '\'' + ',dataAula =' + '\'' + aulaToUpdate.dataAula + '\'' + ', professor =' + '\'' + aulaToUpdate.professor + '\'' + ' WHERE  id =' + aulaToUpdate.id)
}

function checkProfessorMateriaFalse(professor, materia) {
    if (professor == null)
        return true

    if (materia == null)
        return true

    return false
}

function checkProfessorDataFalse(professor, dataAula, materia) {
    if ((professor == null && materia == null) && dataAula != null)
        return false

    return true
}

function checkProfessorMateriaTrue(professor, materia) {
    if (professor != null && materia == null)
        return false

    return true
}

function checkProfessorDataTrue(professor, dataAula, materia) {
    if ((professor != null || materia != null) && dataAula != null)
        return false

    return true
}