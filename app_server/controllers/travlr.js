

// Home Page
module.exports.index = (req, res) => {
    res.render('index', {
        title: 'Home - Travlr Getaways'
    });
};

// Travel Page (with dynamic data from the database)
module.exports.travel = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.render('travel', {
            title: 'Travel',
            trips
        });
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(500).send('Error retrieving trips');
    }
};

// Rooms Page
module.exports.rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms'
    });
};

// Meals Page
module.exports.meals = (req, res) => {
    res.render('meals', {
        title: 'Meals'
    });
};

// News Page
module.exports.news = (req, res) => {
    res.render('news', {
        title: 'News'
    });
};

// About Page
module.exports.about = (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
};

// Contact Page
module.exports.contact = (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
};
