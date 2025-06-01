// Home Page Controller
module.exports.index = (req, res) => {
    res.render('index', {
        title: 'Home - Travlr Getaways'
    });
};
