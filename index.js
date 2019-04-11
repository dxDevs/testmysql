import { GraphQLServer } from "graphql-yoga";
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import resolvers from "./graphql/resolvers";
import models from "./models";
import sequelize from './config/database';

console.log("tripql");

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
    context(req) {
        const dataloaderContext = createContext(models.sequelize);
    
        return {
          [EXPECTED_OPTIONS_KEY]: dataloaderContext,
        };
      },
})

async function start()
{
  await models.sequelize.authenticate({ force: true });
  console.log("sync successfully");
  const city = await models.city.findOne({
    where: { city_id: 1 }
  })
  .then((city) => {
    console.log('city: ', city.dataValues);
  });
  server.start(() => console.log("server start"));
}

start();