import { ApolloServer } from "apollo-server-micro";

import { schema } from "../../../../graphql/core/schema";
import { createContext } from "../../../../graphql/context";

import { IncomingMessage } from "http";

const getRequestOrigin = (req: IncomingMessage) =>
  `${req.headers["x-forwarded-proto"] === `https` ? `https` : `http`}://${
    req.headers.host
  }`;

export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 *  Internal GraphQL server on ednpoint /api/core/v1/graphql
 */

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req }) => {
    // do not forbid in development mode to allow graphql playground
    if (process.env.NODE_ENV !== "development") {
      const { cookie } = req.headers;
      if (
        !(
          cookie.length > 0 &&
          process.env.NEXTAUTH_URL === getRequestOrigin(req)
        )
      )
        throw Error("graphql endpoint: not authorized.");
    }

    return createContext("origin");
  },
  tracing: process.env.NODE_ENV === "development",
});

export default apolloServer.createHandler({
  path: "/api/core/v1/graphql",
});
