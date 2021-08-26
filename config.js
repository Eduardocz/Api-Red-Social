module.exports = {

    api:{
        port: process.env.API_POR|| 3000
    },
    jwt:{
        secret:process.env.JWT_SECRET || 'XDPASS'
    }
}