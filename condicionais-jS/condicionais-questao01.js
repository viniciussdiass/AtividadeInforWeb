def comparar_numeros(num1, num2):
    if num1 % 2 != 0 or num2 % 2 != 0:  # Se um dos números for ímpar
        if num1 % 2 != 0 and num2 % 2 == 0:
            maior = num1
        elif num2 % 2 != 0 and num1 % 2 == 0:
            maior = num2
        else:
            maior = max(num1, num2)
    else:  # Ambos são pares
        maior = max(num1, num2)
    
    print(f"O maior número é: {maior}")

# Exemplo de uso
comparar_numeros(4, 5)
