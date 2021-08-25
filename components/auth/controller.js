const bcrypt = require('bcrypt');
const auth = require('../../auth');
const TABLA = 'auth';
module.exports = function (injectStore) {

    let store = injectStore;
    if (!store) {
        store = require('../../store/dummy');
    }
    
    async function login(username, password){
        const data = await store.query(TABLA,{username: username});
        if(await bcrypt.compare(password,data.password)){
            //TODO generar token
            delete data.password;
            return auth.sign(data);
        }else{
            throw new Error('Información invalidada')
        }
    
    }

    async function upsert(data){
        const authData = {
            id: data.id,
        }

        if(data.username){
            authData.username = data.username;
        }
        if(data.password){
            authData.password = await bcrypt.hash(data.password,6);
        }

        return store.upsert(TABLA,authData);
    }

    return{ 
        upsert,
        login
    }
};