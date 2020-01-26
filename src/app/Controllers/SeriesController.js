import User from '../Models/User';

class SeriesController {
  async index(req, res) {
    const { series_ids } = await User.findByPk(req.userId);

    return res.json(series_ids);
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId);

    const { series_id } = req.body;

    const hasMovie = user.series_ids.includes(series_id);

    if (hasMovie) {
      return res.status(400).json({ error: 'You have this movie' });
    }

    const newSerie = [...user.series_ids, series_id];

    await user.update({
      series_ids: newSerie,
    });

    return res.json(series_id);
  }
}

export default new SeriesController();
