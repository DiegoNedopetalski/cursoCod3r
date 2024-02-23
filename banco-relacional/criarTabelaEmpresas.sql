create table if not exists empresas (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj varchar(14),
    primary key (id),
    unique key (cnpj)
);

-- cidades_empresas

create table if not exists empresas_unidades (
    empresa_id int unsigned not null,
    cidade_id int UNSIGNED not null,
    sede TINYINT(1) not null, 
    primary key (empresa_id, cidade_id)
);

