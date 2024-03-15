function handleEncrypt() {
    let form = document.forms["encryption-parameters-form"];
    let plaintext = form.plaintext.value;
    let offset = Number(form.offset.value);
    form.ciphertext.value = "";
    for (ch of plaintext) {
        let charCode;
        if ("A" <= ch && ch <= "Z") {
            charCode = (ch.charCodeAt() - "A".charCodeAt() + offset) % 26 +
                "A".charCodeAt();
        } else if ("a" <= ch && ch <= "z") {
            charCode = (ch.charCodeAt() - "a".charCodeAt() + offset) % 26 +
                "a".charCodeAt();
        } else {
            alert("出现非法字符！（只允许出现a-z，A-Z中的字符）");
            form.ciphertext.value = "";
            break;
        }

        form.ciphertext.value += String.fromCharCode(charCode);
    }
}