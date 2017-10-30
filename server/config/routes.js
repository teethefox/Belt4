var controller = require('./../controllers/controller.js')
module.exports= function (app){
    app.get('/dashboard', (req, res, next) => {
        console.log('routes', req.body);
        controller.index(req, res)
    })
    app.post('/create', (req, res, next) => {
        console.log('routes', req.body);
       controller.createitem(req, res)
    })
    app.get('/user/:id', function(req, res){
        controller.show(req, res)
      })
      app.post('/tag', (req, res, next) => {
        console.log('routes', req.body);
       controller.createtag(req, res)
    })
}