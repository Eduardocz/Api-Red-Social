const nanoid = require('nanoid');
const TABLA = 'user';

module.exports = function (injectStore) {

    let store = injectStore;
    if (!store) {
        store = require('../../store/dummy');
    }

    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function updsert(body) {
        const user = {
            name: body.name
        }
        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }
        return store.updsert(TABLA, user);
    }

    function remove(id) {
        return store.remove(id);
    }

    return {
        list,
        get,
        updsert,
        remove
    };
}