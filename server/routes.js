const setupRoutes = (app, { surveys }) => {
  app.get('/surveys', async (req, res) => {
    const data = await surveys.all();
    res.send({ data });
  });

  app.post('/surveys', async (req, res) => {
    const data = await surveys.create(req.body);
    res.send({ data });
  });
};

module.exports = setupRoutes;
