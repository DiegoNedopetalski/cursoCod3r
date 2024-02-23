insert into empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 93451446000114),
    ('Itau', 93451446000115),
    ('Santander', 93451446000116),
    ('Banco do Brasil', 93451446000117);

alter table empresas MODIFY cnpj varchar(14);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);