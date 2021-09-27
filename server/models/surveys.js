const Model = require('./base');

class SurveysModel extends Model {
  async all () {
    const surveys = await this.db.table('surveys').select('*');
    return surveys;
  }

  async create (params) {
    const id = await this.db.table('surveys').insert(params);
    return this.all();
  }
}

module.exports = SurveysModel;