var APP = APP || {};
APP.DB = (function(){
    var db,
        cfg = {
            name: 'Twitter.db',
            version: '1.0',
            description : 'Twitter database',
            size : 1 * 1024 * 1024
        },
        createTable = 'CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY, text TEXT, author TEXT, created_at INTEGER)';

        try{
            db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
        } catch(e) {
            console.log(e);
        }

        if (db){
            var createSchema = function(tx){
                tx.executeSql(createTable, [], function(){
                    console.log('Database created!');
                }, function(tx, error){
                    console.log('DB error' + error);
                });
            };

            db.transaction(createSchema);
        }

        var insert = function(tweet){
            var sql = "INSERT INTO tweets VALUES(?,?,?,?)";
            db.transaction(function(tx){
                tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.createdAt], function(tx, results){
                    console.log('Tweet inserted!');
                    console.log(results);
                }, function(tx, error){
                    console.log('DB error: ' + error);
                
                });
            });
        };

        var getAll = function(success){
            db.transaction(function(tx){
                var sql = "SELECT * FROM tweets ORDER BY created_at";
                tx.executeSql(sql, [], function(tx, results){
                    var datos =[];
                    for (var i = results.rows.length - 1; i >= 0; i--) {
                        datos.push(results.rows.item(i));
                    }
                    success(datos);
                    
                }, function(tx, error){
                    console.log('DB error: ' + error);
                });

            });
        };

        return{
            //aquí metemos los métodos que queremos que sean públicos
            "insert": insert,
            "getAll" : getAll
        };


})();