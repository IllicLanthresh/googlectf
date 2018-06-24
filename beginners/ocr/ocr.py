import re

dictionary = {
    'r': 'y',
    'k': 'r',
    'd': 'k',
    'w': 'd',
    'p': 'w',
    'i': 'p',
    'b': 'i',
    'u': 'b',
    'n': 'u',
    'g': 'n',
    'z': 'g',
    's': 'z',
    'l': 's',
    'e': 'l',
    'x': 'e',
    'v': 'c',
    'o': 'v',
    'h': 'o',
    'a': 'h',
    't': 'a',
    'm': 't',
    'f': 'm',
    'Y': 'f',
    'q': 'x'
}
c = []

for a, b in dictionary.items():
    c.append(b)
    print(a, ",", b, ": ", end="")
    print(a in c)

with open("ocred") as file:
    original_text = file.read()

decrypted = original_text

for cry, decry in dictionary.items():
    regx = re.compile(re.escape(cry), re.IGNORECASE)

    #decry = "\033[31m" + decry + "\033[m"

    decrypted = regx.sub(decry, decrypted)

print(decrypted)
