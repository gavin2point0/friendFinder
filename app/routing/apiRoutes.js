module.exports = function (app, data) {

    app.get('/api/friends', function (req, res) {
        res.json(data);
    });
    
}