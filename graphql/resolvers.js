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
                return models.air.findOne({
                    where: args
                })
            },
            airs_price:(_, args) => {
                return models.air.findAll({
                    where: args
                })
            },
            airs_dep:(_, args) => {
                return models.air.findAll({
                    where: args
                })
            },
            airs:() => {
                return models.air.findAll();
            },
            countries:() => {
                return models.country.findAll();
            },
            country:(_, args) => {
                console.log(args);
                return models.country.findOne({
                    where: args
                })
            },
            hotels:() => {
                return models.hotel.findAll();
            },
            hotel:(_, args) => {
                console.log(args);
                return models.hotel.findOne({
                    where: args
                })
            },
            landmarks:() => {
                return models.landmark.findAll();
            },
            landmark:(_, args) => {
                console.log(args);
                return models.landmark.findOne({
                    where: args
                })
            },
            schedules:() => {
                return models.schedule.findAll();
            },
            schedule:(_, args) => {
                console.log(args);
                return models.schedule.findOne({
                    where: args
                })
            },
            tasks:() => {
                return models.task.findAll();
            },
            task:(_, args) => {
                console.log(args);
                return models.task.findOne({
                    where: args
                })
            },
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