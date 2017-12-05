use dolphin;

var dates = ['11/20/2017', '11/21/2017', '11/22/2017', '11/23/2017', '11/24/2017'];

for (var i = 0; i < dates.length; i++) {
    db.batches.aggregate([
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
    ])
}

for (i = 0; i < dates.length; i++) {
    db.batches.aggregate([
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
                    total: {$sum: '$count'}
                }
        }
    ])
}

for (i = 0; i < dates.length; i++) {
    db.messages.aggregate([
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
    ])
}

for (i = 0; i < dates.length; i++) {
    db.messages.aggregate([
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
    ])
}
