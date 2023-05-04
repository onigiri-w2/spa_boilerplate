import { rest, DefaultBodyType, RequestHandler } from "msw";

export function post<T extends DefaultBodyType>(
  url: string,
  body: T,
  statusCode: number
): RequestHandler {
  return rest.post(url, async (req, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(body));
  });
}

export function get<T extends DefaultBodyType>(
  url: string,
  body: T,
  statusCode: number
): RequestHandler {
  return rest.get(url, async (req, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(body));
  });
}
