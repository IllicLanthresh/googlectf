function x(х) { 
    ord = Function.prototype.call.bind(''.charCodeAt); 
    chr = String.fromCharCode; 
    str = String; 
    function h(s) {
        for (i = 0; i != s.length; i++) { 
            a = ((typeof a == 'undefined' ? 1 : a) + ord(str(s[i]))) % 65521;
            b = ((typeof b == 'undefined' ? 0 : b) + a) % 65521 
        } 
        return chr(b >> 8) + chr(b & 0xFF) + chr(a >> 8) + chr(a & 0xFF)
    }
    function c(a, b, c) {
        for (i = 0; i != a.length; i++){
            c = (c || '') + chr(ord(str(a[i])) ^ ord(str(b[i % b.length]))); 
            return c 
        }
    } 
    for (a = 0; a != 1000; a++)
        debugger;
    x = h(str(x));
    source = /Ӈ#7ùª9¨M¤À.áÔ¥6¦¨¹.ÿÓÂ.Ö£JºÓ¹WþÊmãÖÚG¤¢dÈ9&òªћ#³­1᧨/;
    source.toString = function () { return c(source, x) };
    try { 
        console.log('debug', source);
        with (source) return eval('eval(c(source,x))') 
    } catch (e) { } 
}

function open_safe() {
    keyhole.disabled = true;
    password = /^CTF{([0-9a-zA-Z_@!?-]+)}$/.exec(keyhole.value);
    if (!password || !x(password[1])) return document.body.className = 'denied';
    document.body.className = 'granted';
    password = Array.from(password[1]).map(c => c.charCodeAt());
    encrypted = JSON.parse(localStorage.content || '');
    content.value = encrypted.map((c, i) => c ^ password[i % password.length]).map(String.fromCharCode).join('')
}
function save() {
    plaintext = Array.from(content.value).map(c => c.charCodeAt());
    localStorage.content = JSON.stringify(plaintext.map((c, i) => c ^ password[i % password.length]));
}