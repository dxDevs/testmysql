import { resolver } from 'graphql-sequelize';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import models from '../models';
const resolvers = {
    Query: {
        name:() => resolver(models.city)
    }
};
resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY };

export default resolvers;