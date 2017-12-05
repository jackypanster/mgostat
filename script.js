db.messages.aggregate([
    {
        $match:
            {
                'date':'11/16/2017'
            }
    },
    {
        $group:
            {
                _id: {'status':'$status', 'date':'$date'},
                total: { $sum: 1 }
            }
    }
])