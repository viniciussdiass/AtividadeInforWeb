def inverter_numero(numero):
    # Converte o número para string, inverte e converte de volta para inteiro
    numero_invertido_str = str(numero)[::-1]
    numero_invertido = int(numero_invertido_str)

    # Exemplo de uso de match (switch-case)
    match numero_invertido:
        case 0:
            return "O número invertido é zero."
        case _:
            return numero_invertido

# Exemplo de uso
print(inverter_numero(12356))  # Saída esperada: 65321
