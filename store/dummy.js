const db = {
    'user': [
        { id: 1, name: "usario uno" },
        { id: 2, name: "usario dos" },
        { id: 3, name: "usario tres" },
        { id: 4, name: "usario cuatro" }
    ]
}

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);

    return col.find(item => item.id == id)|| null;
}

async function upsert(tabla, data) {
    let col = await list(tabla);
    const newCol = col.push(data);
    return newCol
}

async function remove(tabla, id) {
    let col = await list(tabla);
    delete col[id];
    return col
}

module.exports = {
    list,
    get,
    upsert,
    remove
}