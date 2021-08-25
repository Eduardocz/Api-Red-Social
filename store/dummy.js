const db = {
    'user': [
        { id: 1, name: "usario uno" },
        { id: 2, name: "usario dos" },
        { id: 3, name: "usario tres" },
        { id: 4, name: "usario cuatro" }
    ]
}

async function list(tabla) {
    return db[tabla] || [];
}

async function get(tabla, id) {
    let col = await list(tabla);

    return col.find(item => item.id == id) || null;
}

async function upsert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];

    }
    db[tabla].push(data);
    console.log(db);
}

async function remove(tabla, id) {
    let col = await list(tabla);
    delete col[id];
    return col
}

async function query(tabla, filter){
    let col = await list(tabla);
    let keys = Object.keys(filter);
    let key = keys[0]
    return col.find(item => item[key] == filter[key]) || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}