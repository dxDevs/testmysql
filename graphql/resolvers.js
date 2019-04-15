import { resolver } from 'graphql-sequelize';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import models from '../models';
// const resolvers = {
//     Query: {
//         cities:() => resolver(models.city)
//     }
// };
const resolvers = {
        Query: {
            cities:() => {
                return models.city.all();
            },
            city:(_, args) => {
                return models.city.find({
                    where: args
                })
            }
        },
        Mutation: {
            createCity: (_,args) =>
            {
                const city = models.city.create({
                    city_id: args.city_id,
                    city_name: args.city_name,
                    country_id: args.country_id
                });
                return city;
            }
        }
    };

//resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY };

export default resolvers;