import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, trim: true, unique: true},
    password: {type: String, required: true},
    created_date: {type: Date, default: Date.now}
})

// console.log(studentSchema.path('fees'))

// studentSchema.path('name')

const UserModel = mongoose.model('user', UserSchema)

export default UserModel