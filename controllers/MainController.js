
// GET Home page
module.exports.home = (req, res)=>{

   return res.render('home',{
        title: 'Hello world!',
        user: req.user
    });
}


// GET about page
module.exports.about = (req, res)=>{

    return res.send('about page!');
}


// POST data
module.exports.data = (req, res)=>{

   return res.json({
        message: `Vas id je ${req.params.id}`,
        query: req.query
    });

}