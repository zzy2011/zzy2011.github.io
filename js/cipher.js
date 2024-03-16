function formatOffset(offset) {
    if (offset >= 0) {
        return offset % 26;
    } else {
        return 26 + offset % 26;
    }
}

function encrypt(word, offset) {
    offset = formatOffset(offset);
    let ciphertext = "";
    for (const ch of word) {
        if ("A" <= ch && ch <= "Z") {
            ciphertext +=
                String.fromCharCode((ch.charCodeAt() - "A".charCodeAt() +
                offset) % 26 + "A".charCodeAt());
        } else if ("a" <= ch && ch <= "z") {
            ciphertext += String.fromCharCode((ch.charCodeAt() - "a".charCodeAt() +
                offset) % 26 + "a".charCodeAt());
        } else {
            ciphertext += ch;
        }
    }

    return ciphertext;
}

function decrypt(word, offset) {
    return encrypt(word, -offset);
}

function handleEncrypt() {
    let form = document.forms["encryption-parameters-form"];
    let plaintext = form.plaintext.value;
    let offset = Number(form.offset.value);
    form.ciphertext.value = encrypt(plaintext, offset);
}

function handleDecrypt() {
    let form = document.forms["decryption-parameters-form"];
    let ciphertext = form.ciphertext.value;
    let offset = Number(form.offset.value);
    form.plaintext.value = decrypt(ciphertext, offset);
}