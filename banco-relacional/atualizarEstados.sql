-- Active: 1708551835025@@127.0.0.1@3306@wm
update estados
set nome = 'Maranhão'
where sigla = 'MA'

select estados.nome from estados where sigla = 'MA'

update estados set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'

select nome, sigla, populacao from estados where sigla = 'PR'



