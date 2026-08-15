# Mises à jour sans perte de données

Le code et la base sont séparés. Les déclarations, stocks et paramètres restent dans D1 lorsqu'une nouvelle version est publiée.

1. Dans **Paramètres**, téléchargez une sauvegarde JSON.
2. Créez une branche Git et apportez la modification.
3. Vérifiez la prévisualisation Cloudflare.
4. Fusionnez dans la branche principale.
5. Vérifiez le tableau de bord et une déclaration de test.

Le déploiement exécute `wrangler d1 migrations apply DB --remote` avant la publication. Toute évolution de schéma doit être un nouveau fichier sous `drizzle/`. Ne modifiez jamais une migration déjà appliquée et ne supprimez jamais la base D1 pour mettre l'application à jour.

En cas de problème, revenez à la version de code précédente dans Cloudflare. Si les données ont été altérées, utilisez **Paramètres → Restaurer un fichier**.
