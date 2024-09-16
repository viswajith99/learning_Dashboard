import jwt from 'jsonwebtoken';

export const authUser = (req, res, next) => {
  try {
    const { user_token } = req.cookies;

    if (!user_token) {
      return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    const tokenVerified = jwt.verify(user_token, process.env.JWT_SECRET_KEY);

    if (!tokenVerified) {
      return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    req.user = tokenVerified; // This should include `id`
    console.log('Token verified:', tokenVerified);
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ success: false, message: 'User not authenticated' });
  }
};
