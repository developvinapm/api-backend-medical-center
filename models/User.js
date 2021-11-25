const {Schema , model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    social_name:{
        type: String,
    },
    last_name: {
        paternal: {
            type: String,
        },
        maternal: {
            type: String,
        }
    },
    document: {
        type: {
            type: String,
        },
        number: {
            type: String,
        }
    },
    biological_sex: {
        type: String,
        enum: ['Masculino', 'Femenino']
    },
    birthday: {
        type: Date,
    },
    gender_identity: {
        type: String,
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String,
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('User', UserSchema)