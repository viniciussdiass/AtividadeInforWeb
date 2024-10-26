soma_pares = 0
soma_impares = 0

for i in range(100):
    if i % 2 == 0:
        soma_pares += i
    else:
        soma_impares += i

print(f"Soma dos números pares: {soma_pares}")
print(f"Soma dos números ímpares: {soma_impares}")
