export default function authorize(...allowed) {
  const isAllowed = role => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: 'Your role is not allowed' });
    }
  };
}
