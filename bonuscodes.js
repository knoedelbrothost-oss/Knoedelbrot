// bonuscodes.js
const bonusCodes = [
    { code: "test123456789", expires: "2099-10-01", typ: "ultra" },
    { code: "benni-571", expires: "2026-01-01", typ: "partner" },
];

// Funktion: prüft, ob Code gültig ist
function isBonusCodeValid(inputCode) {
    const today = new Date();
    for(const b of bonusCodes){
        const exp = new Date(b.expires);
        if(b.code === inputCode && today <= exp){
            return true;
        }
    }
    return false;
}
