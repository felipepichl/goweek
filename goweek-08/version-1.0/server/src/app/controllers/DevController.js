import { api } from '../../services/api';
import Dev from '../models/Dev';

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    const response = await api.get(`/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return res.json(dev);
  },
};
