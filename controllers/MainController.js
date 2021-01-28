
// GET Home page
module.exports.home = (req, res)=>{

    res.render('home',{
        title: 'Hello my friends!'
    });
}


// POST data
module.exports.data = (req, res)=>{

    res.json({
        message: `Vas id je ${req.params.id}`,
        query: req.query
    });

}