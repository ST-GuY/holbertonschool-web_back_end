export default function handleResponseFromAPI(promise) {
    return promise
        // 1️⃣ Handler appelé quand la Promise est résolue (succès)
        .then(() => {
            // On retourne l'objet demandé quand tout se passe bien
            return {
                status: 200,
                body: 'success',
            };
        })

        // 2️⃣ Handler appelé quand la Promise est rejetée (erreur)
        .catch(() => {
            // On retourne un objet Error vide
            return new Error();
        })

        // 3️⃣ Handler exécuté dans tous les cas (succès ou erreur)
        .finally(() => {
            // Message affiché quoi qu'il arrive
            console.log('Got a response from the API');
        });
}
