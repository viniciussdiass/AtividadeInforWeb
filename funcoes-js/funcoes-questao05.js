def maior_palavra(frase):
    palavras = frase.split()
    maior = max(palavras, key=len)
    return maior

# Exemplo de uso
print(maior_palavra("A linguagem Python é incrível"))  # Saída esperada: "incrível"
