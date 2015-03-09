var APP = APP || {};
APP.DB = (function(){
    var db,
        cfg = {
            name: 'Twitter.db',
            version: 3,
            description : 'Twitter database',
            size : 1 * 1024 * 1024
        };

    var init = function(success){
        if(!db){
            var request = indexedDB.open(cfg.name, cfg.version);

            request.addEventListener('success', function(e){
                console.log('Database ' + cfg.name + ' OK');

                db = e.target.result;

                success();
            });

            request.addEventListener('upgradeneeded', function(e){
                console.log('Updating database...');

                db = e.target.result;

                var tweets = db.createObjectStore('tweets', {
                            keyPath: 'id',
                            autoIncrement: false
                });
            });

            request.addEventListener('error', function(e){
                console.log('Error opening' + cfg.name + 'database');
            });
        }
        else{
            success();
        }
    };

    var insert = function(tweet){
        init(function(){
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });
    };

    var get = function(id, success){
        init(function(){
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');
            var getRequest = store.get(id);

            getRequest.addEventListener('success', function(e){
            success(e.target.result);
            });
        });
    };
                
        

    return{
            //ahí metemos los métodos que queremos que sean públicos
        insert: insert,
        get: get
            //"getAll" : getAll
    };


})();