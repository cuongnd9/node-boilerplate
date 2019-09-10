export default function withController(action) {
  return (req, res, next) => {
    action(req, res, next)
      .then(res.json.bind(res))
      .catch(next);
  };
}
