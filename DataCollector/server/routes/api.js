const express = require('express');
const router = express.Router();

// Connecting to google cloud services
var config = {
  projectId: 'datacollect-illuin',
  keyFilename: 'src/assets/keys/datacollect-illuin-dacdff2e663c.json'
};

var datastore = require('@google-cloud/datastore')(config);

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//Get user
router.get('/user/?:username&:password', (req, res) => {
    query = datastore
        .createQuery('User')
        .filter("username", "=", req.params.username)
        .filter("password", "=", req.params.password);
    datastore.runQuery(query).then(results => {
        const users = results[0];
        response.data = users;
        res.json(response);
    }).catch((err) => {
        sendError(err, res);
    });
});

// Get users
router.get('/users', (req, res) => {
    query = datastore
        .createQuery('User');
    datastore.runQuery(query).then(results => {
        const users = results[0];
        response.data = users;
        res.json(response);
    }).catch((err) => {
        sendError(err, res);
    });
});

// Get colleceted data
// kind :: name of the kind in GC
router.get('/data/?:kind', (req, res) => {
    query = datastore
        .createQuery(req.params.kind);
    console.log(req.params);
    datastore.runQuery(query).then(results => {
        const collected_data = results[0];
        var to_return = [];
        collected_data.forEach(function(row){
            var temp = row;
            temp.id = row[datastore.KEY].id;
            to_return.push(temp);
        });
        response.data = to_return;
        res.json(response);
    }).catch((err) => {
        sendError(err, res);
    });
});

// Delete single response from kind
router.delete('/data/?:kind&:id', function(req, res){
    const kind = req.params.kind;
    const _id = parseInt(req.params.id);
    console.log(req.params);
    const taskKey = datastore.key([kind, _id]);
    datastore.delete(taskKey)
        .then(() => { console.log("Successfull Delete!");})
        .catch((err) => console.log(err));
});

module.exports = router;