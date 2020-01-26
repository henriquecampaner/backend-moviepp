import User from '../Models/User';

class MovieController {
  async index(req, res) {
    const { movies_ids } = await User.findByPk(req.userId);

    return res.json(movies_ids);
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId);

    const { movies_id } = req.body;

    const hasMovie = user.movies_ids.includes(movies_id);

    if (hasMovie) {
      return res.status(400).json({ error: 'You have this movie' });
    }

    const newMovie = [...user.movies_ids, movies_id];

    await user.update({
      movies_ids: newMovie,
    });

    return res.json(movies_id);
  }
}

export default new MovieController();
