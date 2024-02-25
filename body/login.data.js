export const login = [
    {
        case: {
            title: 'Success Login',
            status: 201,
            message: "Authentication berhasil ditambahkan"
        },
        payload: {
            "email": "1691246243-toko5@gmail.com",
            "password": "password",
        },
        expectedUser: {
            id: "36b3c985-4945-4a46-b585-106a72e353e9",
            name: "Postman1",
            role: "admin",
            email: "1691246243-toko5@gmail.com",
            officeId: "a7265213-9538-4416-b3f8-7bb27a6f5000",
            companyId: "a4029120-b118-4da0-b770-a0dcb3784d12",
            company_name: "Postman1"
        },
    },
    {
        case: {
            title: 'Failed password empty',
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