import User from './user.model';

// POST /api/v1/users/singup
export async function singUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}
