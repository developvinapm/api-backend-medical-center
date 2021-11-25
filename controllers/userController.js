const { User } = require('../models');

module.exports = {
    create: async (req, res) => {
        const {
            name,
            social_name,
            paternal,
            maternal,
            type,
            number,
            biological_sex,
            gender_identity,
            birthday,
            phone,
            email
        } = req.body;
        const last_name = {
            paternal: paternal,
            maternal: maternal
        }
        const document = {
            type: type,
            number: number
        }

        const user = new User({
            name,
            social_name,
            last_name: last_name,
            document: document, 
            biological_sex,
            gender_identity,
            birthday,
            phone,
            email
        })
        try {
            await user.save()
            res.status(200).send(user)
        } catch (error) {
            res.status(409).send(error)
        }
    }
}