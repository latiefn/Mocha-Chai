export const login = [
    {
        case: {
            title: 'Success',
            status: 201,
            message: "Authentication berhasil ditambahkan"
        },
        payload: {
            "email": "234-toko5@gmail.com",
            "password": "Password123",
        },
    },
    {
        case: {
            title: 'failed password empty',
            status: 400,
            message: "\"password\" is not allowed to be empty"
        },
        payload: {
            "email": "234-toko5@gmail.com",
            "password": "",
        }
    },
    {
        case: {
            title: 'Wrong password',
            status: 401,
            message: "Kredensial yang Anda berikan salah"
        },
        payload: {
            "email": "234-toko5@gmail.com",
            "password": "asd",
        }
    },
    {
        case: {
            title: 'Email empty',
            status: 400,
            message: "\"email\" is not allowed to be empty"
        },
        payload: {
            "email": "",
            "password": "asd",
        }
    },
    {
        case: {
            title: 'Email must valid',
            status: 400,
            message: "\"email\" must be a valid email"
        },
        payload: {
            "email": "a",
            "password": "asd",
        }
    }
]