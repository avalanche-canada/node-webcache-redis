var WebCacheRedis = require('./index.js');

var webcacheRedis = new WebCacheRedis();
webcacheRedis.set('mytest', 'mytestresult').then(function (err, val) {
    webcacheRedis.get('mytest').then(function (err, val) {
        if (err) {
            console.log(err);
        } else {
            console.log(val);
        }
    });
});
