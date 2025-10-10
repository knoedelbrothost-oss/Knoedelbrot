// bonuscodes.js
export const bonusCodes = [
    { code: "test123456789", expires: "2099-10-01", typ: "ultra" },
    { code: "benni-571", expires: "2026-01-01", typ: "partner" },
    { code: "Linusa578", expires: "2026-01-01", typ: "partner" },
    { code: "4anos57", expires: "2025-11-01", typ: "basic" }
];

// Funktion: prüft, ob Code gültig ist und gibt den Typ zurück
export function getBonusType(inputCode) {
    const today = new Date();
    for (const b of bonusCodes) {
        const exp = new Date(b.expires);
        if (b.code === inputCode && today <= exp) {
            return b.typ;
        }
    }
    return "none"; // kein gültiger Code
}
