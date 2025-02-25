# Documentation-in-English-and-French

# mern-authpro

Fullstack MERN application with advanced authentication (JWT &amp; OAuth via Google/GitHub), role-based access control (admin, user), and a modern UI (ShadCN/UI, Tailwind CSS). Interactive dashboard with Radix UI and smooth animations using Framer Motion.

# MERN Authentication and User Management Application

This application is a complete authentication and user management system built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- 🔐 Complete authentication (Email/Password)
- 🌐 OAuth authentication (Google and GitHub)
- 👥 User management (CRUD)
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🌓 Light/Dark theme
- 📱 Responsive design
- 🔒 Role-based access control (Admin/User)

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Google Developer Account (for Google authentication)
- GitHub Developer Account (for GitHub authentication)

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd mern-auth-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
# Server
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_secret
```

4. Start the development server:

```bash
# Terminal 1: Backend server
npm run server

# Terminal 2: Frontend client
npm run dev
```

## Project Structure

```
├── server/                 # Backend
│   ├── config/            # Configuration (passport, etc.)
│   ├── models/            # MongoDB models
│   └── routes/            # API routes
├── src/                   # Frontend
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities and store
│   └── pages/            # Application pages
```

## Account Creation

### Administrator Account

The first account created in the database will automatically be an administrator.

1. Go to http://localhost:5173/register
2. Create an account with:
   - Email: admin@example.com
   - Password: admin123
   - Name: Admin

The administrator will have access to:

- `/admin/dashboard`: Admin dashboard
- `/admin/users`: User management
- All administration features

### User Account

1. Go to http://localhost:5173/register
2. Create an account with:
   - Email: user@example.com
   - Password: user123
   - Name: User

The user will have access to:

- `/dashboard`: User dashboard
- Basic features

## Role-based Features

### Administrator

- View all users
- Create new users
- Modify existing users
- Delete users
- Access global statistics
- Manage user roles

### User

- View personal dashboard
- Edit profile
- View personal statistics

## Security

- Passwords hashed with bcrypt
- JWT for authentication
- Role-based route protection
- Data validation with Zod
- Secure sessions

## Technologies Used

### Frontend

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zustand
- React Router
- Axios
- Zod

### Backend

- Node.js
- Express
- MongoDB
- Passport.js
- JWT
- Bcrypt

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

FRANÇAIS

# Application MERN d'Authentification et de Gestion des Utilisateurs

Cette application est un système complet d'authentification et de gestion des utilisateurs construit avec la stack MERN (MongoDB, Express, React, Node.js).

## Fonctionnalités

- 🔐 Authentification complète (Email/Mot de passe)
- 🌐 Authentification OAuth (Google et GitHub)
- 👥 Gestion des utilisateurs (CRUD)
- 🎨 Interface utilisateur moderne avec Tailwind CSS et shadcn/ui
- 🌓 Thème clair/sombre
- 📱 Design responsive
- 🔒 Contrôle d'accès basé sur les rôles (Admin/User)

## Prérequis

- Node.js (v18 ou supérieur)
- MongoDB
- Compte Google Developer (pour l'authentification Google)
- Compte GitHub Developer (pour l'authentification GitHub)

## Installation

1. Clonez le dépôt :

```bash
git clone <url-du-repo>
cd mern-auth-dashboard
```

2. Installez les dépendances :

```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet :

```env
# Server
PORT=5000
MONGODB_URI=votre_uri_mongodb
JWT_SECRET=votre_secret_jwt

# OAuth
GOOGLE_CLIENT_ID=votre_client_id_google
GOOGLE_CLIENT_SECRET=votre_secret_google
GITHUB_CLIENT_ID=votre_client_id_github
GITHUB_CLIENT_SECRET=votre_secret_github
```

4. Démarrez le serveur de développement :

```bash
# Terminal 1 : Serveur backend
npm run server

# Terminal 2 : Client frontend
npm run dev
```

## Structure du Projet

```
├── server/                 # Backend
│   ├── config/            # Configuration (passport, etc.)
│   ├── models/            # Modèles MongoDB
│   └── routes/            # Routes API
├── src/                   # Frontend
│   ├── components/        # Composants React
│   ├── hooks/            # Hooks personnalisés
│   ├── lib/              # Utilitaires et store
│   └── pages/            # Pages de l'application
```

## Création des Comptes

### Compte Administrateur

Le premier compte créé dans la base de données sera automatiquement un administrateur.

1. Accédez à http://localhost:5173/register
2. Créez un compte avec :
   - Email : admin@example.com
   - Mot de passe : admin123
   - Nom : Admin

L'administrateur aura accès à :

- `/admin/dashboard` : Tableau de bord administrateur
- `/admin/users` : Gestion des utilisateurs
- Toutes les fonctionnalités d'administration

### Compte Utilisateur

1. Accédez à http://localhost:5173/register
2. Créez un compte avec :
   - Email : user@example.com
   - Mot de passe : user123
   - Nom : User

L'utilisateur aura accès à :

- `/dashboard` : Tableau de bord utilisateur
- Fonctionnalités de base

## Fonctionnalités par Rôle

### Administrateur

- Voir tous les utilisateurs
- Créer de nouveaux utilisateurs
- Modifier les utilisateurs existants
- Supprimer des utilisateurs
- Accéder aux statistiques globales
- Gérer les rôles des utilisateurs

### Utilisateur

- Voir son tableau de bord personnel
- Modifier son profil
- Voir ses statistiques personnelles

## Sécurité

- Mots de passe hashés avec bcrypt
- JWT pour l'authentification
- Protection des routes par rôle
- Validation des données avec Zod
- Sessions sécurisées

## Technologies Utilisées

### Frontend

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zustand
- React Router
- Axios
- Zod

### Backend

- Node.js
- Express
- MongoDB
- Passport.js
- JWT
- Bcrypt

## Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request
