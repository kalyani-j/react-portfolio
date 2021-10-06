import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        projectTitle: {
            type: String,
            trim: true,
        },
        projectDesc: {
            type: String,
            trim: true,
        },
        projectImgURL:{
            type: String,
            trim: true,
        },
        gitHubURL: {
            type: String,
            trim: true,
        },
        deployLink: {
            type: String,
            trim: true,
        },
    }
);

const Projects = mongoose.model('Projects', projectSchema);

export default Projects;