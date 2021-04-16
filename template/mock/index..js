const proxy = {
    'GET /api/users': {
        data: {
            userName: 'Hank',
        },
        errorCode: 0,
    },
    // 支持参数
    'POST /api/users/:id': (req, res) => {
        const { id } = req.params;
        res.send({ id });
    },
}
module.exports = proxy;