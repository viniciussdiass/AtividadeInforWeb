alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [70, 60, 80]],
    ["Aluno4", [90, 100, 85]],
    ["Aluno5", [45, 60, 55]]
]

for aluno in alunos:
    nome = aluno[0]
    notas = aluno[1]
    media = sum(notas) / len(notas)

    if media >= 70:
        status = "Aprovado"
    else:
        status = "Reprovado"

    print(f"{nome}, média {media:.2f}, {status}")
