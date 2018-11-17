const path = require('path');

let router = function(req, res) {
    if (req.path === "/survey") {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    } else {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    }
}

module.exports = router;