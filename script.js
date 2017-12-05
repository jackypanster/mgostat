function start() {
    return db.messages.find();


    /*var dates = ['11/13/2017', '11/14/2017', '11/15/2017', '11/16/2017', '11/17/2017'];


    for (var i = 0; i < dates.length; i++) {
        printjson(db.batches.aggregate([
            {
                $match:
                    {
                        'date': dates[i]
                    }
            },
            {
                $group:
                    {
                        _id: {'path': '$path', 'status': '$status', 'date': '$date'},
                        total: {$sum: '$count'}
                    }
            }
        ]));
    }

    for (i = 0; i < dates.length; i++) {
        printjson(db.messages.aggregate([
            {
                $match:
                    {
                        'date': dates[i]
                    }
            },
            {
                $group:
                    {
                        _id: {'status': '$status', 'date': '$date'},
                        total: {$sum: 1}
                    }
            }
        ]));
    }*/
}

start();