import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import User from '../models/User.js';

const router = express.Router();

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// Local login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = generateToken(user);
    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        avatar: user.avatar,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    const user = await User.create({ email, password, name });
    const token = generateToken(user);

    res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Google OAuth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`/auth/callback?token=${token}`);
  }
);

// GitHub OAuth
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`/auth/callback?token=${token}`);
  }
);

export default router;