import Topic from "../models/Topic.model.js";

export const getAllTopics = async () => {
    return await Topic.find();
};