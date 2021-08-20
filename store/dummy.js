const db = {
    'user': [
        { id: 1, name: "usario uno" },
        { id: 2, name: "usario dos" },
        { id: 3, name: "usario tres" },
        { id: 4, name: "usario cuatro" }
    ]
}

function list(tabla) {
    return db[tabla];
}

function get(tabla, id) {
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(tabla, data) {
    db[collection.push(data)];
}

function remove(tabla, id) {
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove
}