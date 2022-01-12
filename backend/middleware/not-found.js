const notFound = (req, res) => res.status(404).send('404: Endpoint not found');

module.exports = notFound;
