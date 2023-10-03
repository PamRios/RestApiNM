import User from './user.model';

// POST /api/v1/users/signup
export async function signup(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    console.log('error 500');
    return res.status(500).json(e);
  }
}
