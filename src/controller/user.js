const db = require("../database/firebase");

exports.userCreate = async (req, res) => {
    try {
        const { name, email, username, age, gender, mobile } = req.body

        const data = {
            name: name,
            email: email,
            username: username,
            age: age,
            gender: gender,
            mobile: mobile
        }
        let docRef = db.collection('users')

        await docRef.add(data)
        res.status(200).json({
            message: "user create sucessfull",
            result: data
        })

    } catch (error) {
        res.send(error)

    }

}


exports.userRead = async (req, res) => {
    try {
        let usr = []
        const userData = await db.collection('users').get()
        if (userData.docs.length > 0) {
            for (const users of userData.docs) {
                usr.push(users.data())
            }
        }
        res.status(200).json({
            message: "success",
            result: usr
        })

    } catch (error) {
        res.send(error)

    }

}


exports.userUpdate = async (req, res) => {
    try {
        const { name, email, username, age, gender, mobile } = req.body
        if (!(name && email && username && age && age && gender && mobile)) {
            return res.send("all field are required")
        }
        let docRef = db.collection('users').doc(req.params.name)
        await docRef.update({
            name: name,
            email: email,
            username: username,
            age: age,
            gender: gender,
            mobile: mobile
        })
        res.json({ message: 'done' });


    } catch (error) {
        res.send(error)

    }

}


exports.userDelete = async (req, res) => {
    try {
        await db.collection('users').doc(req.params.name).delete()
        res.json({ message: 'done' })

    } catch (error) {
        res.send(error)

    }

}