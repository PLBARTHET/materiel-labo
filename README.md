# Matériel Labo

Application web libre de suivi de la casse et du stock de matériel pour les laboratoires d'enseignement. Elle convient à la chimie, mais aussi aux laboratoires de collège et aux autres disciplines. Les déclarations étudiantes sont anonymes : laboratoire, classe, poste, matériel et quantité uniquement.

## Déploiement en un clic

Une fois ce dépôt publié sur GitHub, remplacez `VOTRE-COMPTE/VERRERIE-LABO` dans ce lien par l'adresse du dépôt :

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/VOTRE-COMPTE/VERRERIE-LABO)

Cloudflare crée le Worker, la base D1 et la connexion Git. Il demande `ADMIN_CODE`, le code provisoire qui ouvre la première installation.

Après le déploiement :

1. Ouvrez l'adresse fournie par Cloudflare.
2. Cliquez sur **Paramètres** et saisissez le code provisoire.
3. Configurez l'établissement, l'année, les laboratoires, les classes et le nouveau code partagé.
4. Téléchargez et imprimez les QR codes depuis **Paramètres**.

## Fonctions

- déclaration anonyme par QR code propre à chaque laboratoire ;
- tableau de bord, graphique paramétrable et export CSV ;
- correction/suppression contrôlée des déclarations ;
- stock par laboratoire, seuils, commandes et valeurs négatives ;
- affectation indépendante du matériel à chaque laboratoire et vue consolidée ;
- catalogue et prix unitaires ;
- sauvegarde/restauration JSON complète ;
- migrations D1 qui préservent les données lors des mises à jour.

## Mise à jour

Cloudflare redéploie automatiquement chaque modification poussée sur la branche principale. `npm run deploy` applique d'abord les migrations D1, puis publie le code. Par prudence, téléchargez une sauvegarde depuis **Paramètres** avant une mise à jour importante.

Voir [l'installation](docs/INSTALLATION.md), [les mises à jour](docs/MISES-A-JOUR.md) et [les contributions](CONTRIBUTING.md).

## Développement local

```bash
npm ci
cp .dev.vars.example .dev.vars
npm run dev
```

Prérequis : Node.js 22.13 ou plus récent. Ne commitez jamais `.dev.vars`, une sauvegarde réelle ou un code du personnel.

## Licence

MIT — réutilisation et adaptation autorisées avec conservation de la notice.
