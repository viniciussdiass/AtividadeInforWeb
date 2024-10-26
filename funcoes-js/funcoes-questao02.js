def contar_vogais_consoantes(frase):
    frase = frase.lower()
    vogais = "aeiou"
    contagem_vogais = 0
    contagem_consoantes = 0

    for char in frase:
        if char.isalpha():  # Verifica se é uma letra
            if char in vogais:
                contagem_vogais += 1
            else:
                contagem_consoantes += 1

    return contagem_vogais, contagem_consoantes

# Exemplo de uso
vogais, consoantes = contar_vogais_consoantes("Olá, como vai você?")
print(f"Vogais: {vogais}, Consoantes: {consoantes}")
