import string

b_printable = []
for chr in string.printable:
    b_printable.append(str.encode(chr))

ign = [b'\x00', b' ']


with open("foo", "rb") as icon:
    byte = icon.read(1)
    while (byte != b''):
            try:
                if byte in b_printable: 
                    if byte not in ign:
                        print(byte.decode(), end="")
                    
                byte = icon.read(1)
            except:
                pass