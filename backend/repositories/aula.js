const sql = require('../database/database')

exports.getAula = async () => {
    return sql`SELECT * FROM aula`.execute()
}

exports.createAula = async (aulaToInsert) => {
    const aula = await sql`insert into aula
                            (materia, dataAula, professor)
                            values
                            (${aulaToInsert.materia}, ${aulaToInsert.dataAula}, ${aulaToInsert.professor})`
}