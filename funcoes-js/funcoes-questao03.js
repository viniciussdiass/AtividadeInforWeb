def maior_menor(lista):
    maior = max(lista)
    menor = min(lista)
    return maior, menor

# Exemplo de uso
numeros = [3, 6, 1, 9, 4, 8, 5, 7, 2, 10]
maior, menor = maior_menor(numeros)
print(f"Maior: {maior}, Menor: {menor}")
