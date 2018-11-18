const path = require('path');
const fs = require('fs');

let router = function(req, res) {
    fs.readFile(path.join(__dirname, "../data/friends.js"), 'utf8', (err, data) => {
        if (err) throw err;
        let array = JSON.parse(data);
        if (req.method === "GET") {
            res.json(array);
        } else if (req.method === "POST") {
            let diff = Infinity;
            let index = -1
            let submittedSum = 0;
            req.body.scores.forEach(num => {
                submittedSum += parseInt(num);
            });

            array.forEach((element, i) => {
                let sum = 0;
                element.scores.forEach(num => {
                    sum += parseInt(num);
                });
                if (Math.abs(sum - submittedSum) < diff) {
                    diff = Math.abs(sum - submittedSum);
                    index = i;
                }
            });

            array.push(req.body);
            // fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(array, null, 2), 'utf8', err => {
            //     if (err) throw err;
            //     res.end(JSON.stringify(array[index]));
            // });
            res.end(JSON.stringify(array[index]));
        }
    });
}

module.exports = router;