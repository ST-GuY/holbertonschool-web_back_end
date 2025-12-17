export default function updateUniqueItems(map) {
    // 1️⃣ Vérifier que l'argument est bien une Map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // 2️⃣ Parcourir chaque élément de la Map
    for (const [key, value] of map) {
        // 3️⃣ Si la quantité est égale à 1
        if (value === 1) {
            // 4️⃣ Mettre à jour la valeur à 100
            map.set(key, 100);
        }
    }

    // 5️⃣ Retourner la Map mise à jour
    return map;
}
