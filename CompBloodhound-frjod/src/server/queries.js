import HttpError from '@wasp/core/HttpError.js'

export const getSearch = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const search = await context.entities.Search.findUnique({
    where: { id: args.searchId },
    include: { results: true, user: true },
  });

  if (!search) { throw new HttpError(404, 'Search not found') }

  if (search.user.id !== context.user.id) { throw new HttpError(400, 'Search does not belong to user') }

  return search;
}