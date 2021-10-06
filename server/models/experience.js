import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const experienceSchema = new Schema(
    {
        employerName: {
            type: String,
            trim: true,
        },
        period: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            trim: true,
        },
        techStack: {
            type: String,
            trim: true,
        }
    }
);

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;