# Installation Cloudflare

Créez un dépôt GitHub public, envoyez-y ces fichiers, puis remplacez l'adresse générique du bouton dans le README par l'URL réelle du dépôt.

Cliquez sur **Deploy to Cloudflare**. Cloudflare copie le dépôt, provisionne la base D1 déclarée dans `wrangler.jsonc`, construit l'application et publie une adresse `workers.dev`.

Quand Cloudflare demande `ADMIN_CODE`, indiquez un code provisoire solide. Il n'est pas enregistré dans GitHub. À la première ouverture de l'espace personnel, l'assistant permet de choisir le code partagé définitif.

Le service informatique peut ensuite ajouter un sous-domaine dans les paramètres du Worker. Les QR codes utilisent automatiquement le domaine avec lequel l'application est ouverte.
