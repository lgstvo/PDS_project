const pool = require('../database/database')

exports.getPerfil = async (id) => {
    var result = await pool.query('SELECT id, nome, isprofessor, email, telefone, curriculo FROM perfil WHERE id=' + id)
    return result
}

exports.getAulasMarcadas = async (idPerfil) => {
    var result = await pool.query('SELECT * FROM aula JOIN perfilaula ON perfilaula.idaula = aula.id WHERE perfilaula.idPerfil=' + idPerfil)
    return result
}

exports.createPerfil = async (perfilToCreate) => {
    if (perfilToCreate.curriculo.length != 0) {
        await pool.query('insert into perfil (nome, isprofessor, pwd, email, telefone, curriculo) values ( ' + '\'' + perfilToCreate.nome + '\'' + ',' + '\'' + perfilToCreate.isProfessor + '\'' + ',' + '\'' + perfilToCreate.pwd + '\'' + ',' + '\'' + perfilToCreate.email + '\'' + ',' + '\'' + perfilToCreate.telefone + '\'' + createArrayCurriculo(perfilToCreate.curriculo) + ')')
    } else {
        await pool.query('insert into perfil (nome, isprofessor, pwd, email, telefone) values ( ' + '\'' + perfilToCreate.nome + '\'' + ',' + '\'' + perfilToCreate.isProfessor + '\'' + ',' + '\'' + perfilToCreate.pwd + '\'' + ',' + '\'' + perfilToCreate.email + '\'' + ',' + '\'' + perfilToCreate.telefone + '\'' + ')')
    }
}

exports.updatePerfil = async (perfilToUpdate) => {
    if (perfilToUpdate.curriculo.length != 0) {
        await pool.query('UPDATE perfil  SET  nome = ' + '\'' + perfilToUpdate.nome + '\'' + ',isprofessor =' + '\'' + perfilToUpdate.isProfessor + ', email = ' + '\'' + perfilToUpdate.email + '\'' + ', telefone =' + '\'' + perfilToUpdate.email + '\'' + ' ,curriculo =' + updateArrayCurriculo(perfilToUpdate.curriculo) + ' WHERE  id =' + perfilToUpdate.id)
    }else {
        await pool.query('UPDATE perfil  SET  nome = ' + '\'' + perfilToUpdate.nome + '\'' + ',isprofessor =' + '\'' + perfilToUpdate.isProfessor + ', email = ' + '\'' + perfilToUpdate.email + '\'' + ', telefone =' + '\'' + perfilToUpdate.email + '\'' + ' WHERE  id =' + perfilToUpdate.id)
    }   
}

exports.getAvaliacaoPerfil = async (idPerfil) => {
    var result = await pool.query('SELECT * FROM avaliacao WHERE idPerfil=' + idPerfil)
    return result
}

exports.createAvaliacao = async (avaliacao) => {
    await pool.query('insert into avaliacao (idperfil, notaclaridade, notasimplicidade, notapontualidade) values ( ' + avaliacao.idPerfil + ',' + avaliacao.notaClareza + ',' + avaliacao.notaSimplicidade + ',' + avaliacao.notaPontualidade + ')')
}

function createArrayCurriculo(arrayCurriculo) {
    var array = ', ARRAY [';
    for (let i = 0; i < arrayCurriculo.length; i++) {
        if (i != arrayCurriculo.length - 1) {
            array = array + '\'' + arrayCurriculo[i] + '\','
        } else {
            array = array + '\'' + arrayCurriculo[i] + '\']'
        }
    }

    return array
}

function updateArrayCurriculo(arrayCurriculo) {
    var array = ' ARRAY [';
    for (let i = 0; i < arrayCurriculo.length; i++) {
        if (i != arrayCurriculo.length - 1) {
            array = array + '\'' + arrayCurriculo[i] + '\','
        } else {
            array = array + '\'' + arrayCurriculo[i] + '\']'
        }
    }

    return array
}