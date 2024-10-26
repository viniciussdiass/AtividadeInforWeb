def palavra_presente(frase, palavra):
    return palavra in frase

# Exemplo de uso
print(palavra_presente("O céu está azul", "azul"))  # Saída: True
print(palavra_presente("O céu está azul", "verde"))  # Saída: False
