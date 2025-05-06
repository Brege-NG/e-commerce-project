# TechTreasure - Boutique en ligne d'électronique et de jeux vidéo

TechTreasure est une application web moderne de commerce électronique construite avec React, offrant une expérience d'achat fluide pour les produits électroniques, les jeux vidéo et les accessoires tech.

## 🚀 Fonctionnalités

- Design moderne et responsive
- Navigation fluide entre les catégories
- Recherche de produits
- Système de panier d'achat
- Liste de souhaits
- Filtrage et tri des produits
- Animations fluides
- Interface utilisateur intuitive

## 🛠️ Technologies Utilisées

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide Icons

## 📦 Installation

1. Mettez à jour les paquets et installez npm :
```bash
sudo apt update
sudo apt install npm -y
```

2. Installez Node.js :
```bash
sudo npm i n -g
sudo apt install node
node -v
```

3. Installez et configurez Nginx :
```bash
sudo apt install nginx -y
curl localhost
```

4. Préparez le répertoire web :
 ```bash
cd /var/www/html/
sudo rm index.nginx-debian.html
```

5. Clonez le projet et installez les dépendances :
```bash
git clone [url-du-repo]
cd [project]
sudo apt install npm
npm i
```

6. Build le projet et déployez :
```bash
npm run build
cd disc
ls
sudo cp -r * /var/www/html/
```

## 🏗️ Structure du Projet

```
src/
├── components/     # Composants réutilisables
├── context/       # Contextes React (panier, etc.)
├── data/          # Données statiques
├── pages/         # Pages de l'application
├── types/         # Types TypeScript
└── utils/         # Utilitaires et helpers
```

## 📱 Pages Principales

- **Accueil** : Présentation des produits vedettes et des catégories
- **Produits** : Liste complète des produits avec filtres
- **Détail Produit** : Information détaillée sur un produit
- **Panier** : Gestion du panier d'achat
- **Liste de souhaits** : Produits sauvegardés
- **Recherche** : Recherche de produits
- **Contact** : Formulaire de contact
- **À propos** : Information sur l'entreprise

## 🔍 Fonctionnalités Détaillées

### Gestion du Panier
- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique du total
- Persistance des données

### Catalogue de Produits
- Filtrage par catégorie
- Tri par prix, nom, popularité
- Vue en grille ajustable
- Pagination

### Liste de Souhaits
- Ajout/suppression de produits
- Transfert vers le panier
- Persistance des données

## 🎨 Design

L'interface utilise Tailwind CSS pour un design moderne et responsive avec :
- Thème cohérent
- Animations fluides
- Composants réutilisables
- Design adaptatif

## 🚀 Déploiement

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
