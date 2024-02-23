select * from prefeitos;
select* from cidades;
-- Active: 1708551835025@@127.0.0.1@3306@wm
select * from cidades c
inner join prefeitos p
on c.id = p.cidade_id;

select * from cidades c
left outer join prefeitos p
on c.id = p.cidade_id;

select * from cidades c
right outer join prefeitos p 
on c.id = p.cidade_id;

select * from cidades c
left outer join prefeitos p 
on c.id = p.cidade_id
union
select * from cidades c
right join prefeitos p
on c.id = p.cidade_id;
