export default function createInt8TypedArray(length, position, value) {
    // 1️⃣ Créer un ArrayBuffer de la bonne taille
    const buffer = new ArrayBuffer(length);

    // 2️⃣ Vérifier si la position est valide
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }

    // 3️⃣ Créer un DataView pour manipuler le buffer
    const view = new DataView(buffer);

    // 4️⃣ Écrire la valeur Int8 à la position donnée
    view.setInt8(position, value);

    // 5️⃣ Retourner le DataView
    return view;
}
