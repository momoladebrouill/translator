f = open("data.txt", "r")
new = open("data2.txt", "w")

chiffres = "4871".split()

def combi(s):
    if len(s) == 1 :
        return [s]
    else:
        x = s[0]
        l = combi(s[1:])
        nl = []
        for e in l:
            for i in range(len(e)+1):
                nl.append(e[:i]+x+e[i:])
        return nl

def combinaisons(s:str):
    l = combi(s)
    l.sort()
    for e in l:
        yield e

for line,value in zip(f.readlines(),combinaisons("4871")):
    new.write(line.strip()+','+value+'\n')

f.close()
new.close()
