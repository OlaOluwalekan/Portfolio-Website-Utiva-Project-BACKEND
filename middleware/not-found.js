const notFound = (req, res) => {
  res.send(`Route ${req.url} does not exist`)
}

export default notFound
