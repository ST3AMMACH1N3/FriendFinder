let router = function(app, path, fs) {
    app.get("/api/friends", (req, res) => {
        fs.readFile(path.join(__dirname, "../data/friends.js"), 'utf8', (error, result) => {
            if (error) throw error;
            res.json(JSON.parse(result));
        });
    });

    app.post("/api/friends", (req, res) => {
        fs.readFile(path.join(__dirname, "../data/friends.js"), 'utf8', (error, result) => {
            if (error) throw error;
            let sum =  calcSum(req.body.scores);
            let array = JSON.parse(result);
            let lowest = Infinity;
            let index = -1;
            array.forEach((element, i) => {
                let tempSum = calcSum(element.scores);
                if (Math.abs(sum - tempSum) < lowest) {
                    index = i;
                    lowest = tempSum;
                }
            });
            res.json(array[index]);
            array.push(req.body);
            fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(array, null, 2), 'utf8', err => {
                if (err) throw err;
            });
        });
        
    });
}

function calcSum(array) {
    let sum = 0;
    array.forEach(element => {
        sum += parseInt(element);
    });
    return sum;
}

module.exports = router;