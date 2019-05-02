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
                console.log("find cities");
                return models.city.findAll();
            },
            city:(_, args) => {
                console.log(args);
                return models.city.findOne({
                    where: args
                })
            },
            users:() => {
                console.log("find users");
                return models.user.findAll();
            },
            user:(_, args) => {
                console.log(args);
                return models.user.findOne({
                    where: args
                })
            },
            air:(_, args) => {
                console.log("array : " + args);
                return models.air.findAll({
                    where: args
                })
            },
            airs_price:(_, args) => {
                console.log("price : " + args);
                return models.air.findAll({
                    where: args
                })
            },
            airs_all:() => {
                console.log("find airs");
                return models.air.findAll();
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