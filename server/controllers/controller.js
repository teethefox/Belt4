var mongoose= require('mongoose');
var Item= mongoose.model('Item');
module.exports={

index: function(req, res){
    Item.find({}, function(err, items){
        res.json({'items': items})
            })
        },
        createitem: function(req, res) {
            
            var item = new Item({
             title: req.body.title,
             name:req.body.name,
             desc: req.body.desc,
             created_at: new Date()
             
            });
            
            
            
            item.save(function(err) {
              if(err) {
                console.log('something went wrong');
              } 
            })
              console.log("saved lolll")
         
        },
        show: function(req, res){
            Item.find({ _id: req.params.id }, function(err, items) {
              res.json({ items: items });
            })
          },
          createtag: function(req, res) {
            
            var item = new Item({
             title: req.body.title,
             name:req.body.tag,
             desc: req.body.desc,
             created_at: new Date()
             
            });
            
            
            
            item.save(function(err) {
              if(err) {
                console.log('something went wrong');
              } 
            })
              console.log("saved tag")
         
        },
    }