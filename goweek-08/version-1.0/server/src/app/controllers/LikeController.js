import Dev from '../models/Dev';

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { _id } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(_id);

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.likes.includes(user)) {
      console.log('Match');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  },
};
