export default function cleanSet(set, startString) {
    // 1️⃣ Si startString est vide ou n'existe pas,
    // on retourne une chaîne vide (comportement attendu par l'exercice)
    if (!startString) {
        return '';
    }

    // 2️⃣ Convertir le Set en tableau pour pouvoir utiliser filter et map
    return Array.from(set)

        // 3️⃣ Garder uniquement les valeurs qui commencent par startString
        .filter(value => value.startsWith(startString))

        // 4️⃣ Pour chaque valeur filtrée, enlever startString du début
        .map(value => value.slice(startString.length))

        // 5️⃣ Joindre tous les morceaux avec un tiret "-"
        .join('-');
}
