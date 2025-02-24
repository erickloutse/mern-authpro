import express from 'express';
import passport from 'passport';
import User from '../models/User.js';

const router = express.Router();

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Accès non autorisé' });
  }
  next();
};

// Get all users (admin only)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
);

// Create user (admin only)
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  async (req, res) => {
    try {
      const { email, password, name, role } = req.body;

      if (await User.findOne({ email })) {
        return res.status(400).json({ message: 'Email déjà utilisé' });
      }

      const user = await User.create({ email, password, name, role });
      res.status(201).json({
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      });
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
);

// Update user (admin only)
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  async (req, res) => {
    try {
      const { name, role } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { name, role, updatedAt: new Date() },
        { new: true }
      ).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
);

// Delete user (admin only)
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }

      res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
);

export default router;