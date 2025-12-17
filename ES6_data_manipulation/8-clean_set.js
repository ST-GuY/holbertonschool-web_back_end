export default function cleanSet(set, startString) {
    // 1️⃣ Si startString n'est pas une string ou est vide → retourner ''
    if (typeof startString !== 'string' || startString.length === 0) {
        return '';
    }

    // 2️⃣ Vérifier que toutes les valeurs du Set sont des strings
    for (const value of set) {
        if (typeof value !== 'string') {
            return '';
        }
    }

    // 3️⃣ Convertir le Set en tableau
    return Array.from(set)
        // Garder uniquement les valeurs qui commencent par startString
        .filter(value => value.startsWith(startString))
        // Enlever startString du début
        .map(value => value.slice(startString.length))
        // Joindre avec "-"
        .join('-');
}
