# Initiation à Ethereum

Ce projet est une application web conçue pour initier les débutants à l'écosystème Ethereum. Il permet d'expérimenter avec des smart contracts de manière simple et intuitive.

## Fonctionnalités

### 1. Compteur Simple
- Un smart contract basique qui permet de comprendre les concepts fondamentaux
- Fonctionnalités :
  - Incrémentation du compteur
  - Décrémentation du compteur (avec vérification de sécurité)
  - Affichage en temps réel de la valeur du compteur
  - Interaction directe avec la blockchain via MetaMask

### 2. Création de Token ERC20
- Création de votre propre token ERC20 personnalisé
- Fonctionnalités :
  - Définition du nom du token
  - Définition du symbole du token
  - Déploiement automatique sur le réseau Sepolia
  - Récupération de l'adresse du token créé

## Technologies Utilisées

- **Frontend** :
  - Next.js
  - React
  - TailwindCSS
  - Wagmi (pour l'interaction avec Ethereum)
  - Thirdweb (pour la connexion wallet)

- **Smart Contracts** :
  - Solidity
  - Foundry (pour le développement et les tests)

## Comment Commencer

1. **Prérequis** :
   - Node.js installé
   - MetaMask installé et configuré sur le réseau Sepolia
   - Des ETH de test sur Sepolia (disponibles via les faucets)

2. **Installation** :
   ```bash
   npm install
   npm run dev
   ```

3. **Utilisation** :
   - Connectez votre wallet MetaMask
   - Explorez les différentes fonctionnalités
   - Interagissez avec les smart contracts

## Réseau de Test

L'application utilise le réseau Sepolia, un réseau de test Ethereum. Cela permet d'expérimenter sans risquer de vrais ETH.

## Objectifs Pédagogiques

- Comprendre les bases des smart contracts
- Apprendre à interagir avec la blockchain
- Découvrir le processus de création de tokens
- Se familiariser avec les wallets et les transactions

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités

## Licence

Ce projet est sous licence MIT.
