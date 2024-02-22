create table if not exists prefeitos (
    id int unsigned not null AUTO_INCREMENT, 
    nome varchar(255) not null,
    cidade_id int UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);