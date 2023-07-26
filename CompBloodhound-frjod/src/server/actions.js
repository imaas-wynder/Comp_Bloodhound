import HttpError from '@wasp/core/HttpError.js'

export const createSearch = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  // Implement the search operation here.

  const newSearch = await context.entities.Search.create({
    data: {
      query: args.companyName,
      user: {
        connect: { id: context.user.id }
      }
    }
  });

  // Implement the search operation here.

  return newSearch;
}

export const addResult = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const search = await context.entities.Search.findUnique({
    where: { id: args.searchId }
  });
  if (search.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Result.create({
    data: {
      url: args.url,
      type: args.type,
      content: args.content,
      search: { connect: { id: args.searchId } }
    }
  });
}