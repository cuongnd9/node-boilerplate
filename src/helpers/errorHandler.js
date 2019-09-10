import Boom from '@hapi/boom';

export default function handleError(err, req, res, next) {
  if (
    typeof err !== 'object' ||
    Object.keys(err).length === 0 ||
    (!err.statusCode && !err.output.statusCode)
  ) {
    const defaultError = Boom.badImplementation('An internal server error occurred');
    const { statusCode, payload } = defaultError.output;
    return res.status(statusCode).json(payload);
  }
  if (err.isBoom) {
    const { statusCode, payload } = err.output;
    return res.status(statusCode).json(payload);
  }
  const { statusCode = 500 } = err;
  res.status(statusCode).json(err);
  next();
}
