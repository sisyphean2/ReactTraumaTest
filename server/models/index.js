const SurveysModel = require('./surveys');

const setupModels = db => {
  const models = {
    surveys: new SurveysModel(db),
  };

  // allows a model instance to access other model instances
  Object.values(models).forEach(model => {
    model.models = models;
  });

  return models;
};

module.exports = setupModels;
