create database socioRei;

use socioRei;

create table usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(45),
    sobrenome varchar(45),
    email varchar(45),
    senha varchar(45),
    fkCartao char(6)
);

create table dadosCartao(
	numeroCartao char(6) primary key,
    digitoCartao char(3),
	fkEstilo int,
    fkBeneficios int
);


create table estiloCartao(
	idEstiloCartao INT PRIMARY KEY AUTO_INCREMENT,
    corCartao char(8),
    clube varchar(45)
);

create table beneficios(
	idBeneficios INT PRIMARY KEY AUTO_INCREMENT,
    nomeBeneficio varchar(45),
    valor decimal(5,2)
);

create table beneficiosCartao(
	fkBeneficiosCartao int,
    fkNumeroCartao int
);

select * from usuario;

select * from usuario, dadosCartao where fkCartao = numeroCartao;


select * from dadosCartao;

select * from beneficios;


insert into estiloCartao values (null, 'laranja', 'São Paulo FC'),
								(null, 'preto', 'São Paulo FC'),
                                (null, 'vermelho', 'São Paulo FC'),
                                (null, 'laranja', 'Palmeiras'),
                                (null, 'preto', 'Palmeiras'),
                                (null, 'verde', 'Palmeiras');
                                
insert into beneficios values (null, 'Plano laranja', 49.99),
							  (null, 'Plano infantil', 29.99),
                              (null, 'Plano tricolor', 69.99),
                              (null, 'Plano verdão', 69.99);

select * from estiloCartao; 

select * from usuario, dadosCartao, estiloCartao where fkCartao = numeroCartao and fkEstilo = idEstiloCartao;

select * from usuario, dadosCartao, estiloCartao where email='gabriel.medeiros@bandtec.com.br' and senha='gabriel123' 
and fkCartao = numeroCartao and fkEstilo = idEstiloCartao;

