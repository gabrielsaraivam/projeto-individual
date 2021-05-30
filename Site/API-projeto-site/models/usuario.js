	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		sobrenome: {
			field: 'sobrenome',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkCartao: {
			field: 'fkCartao',
			type: DataTypes.INTEGER,
			allowNull: false
		}

	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

	

    
    // let Card = sequelize.define('Card',{
	// 	numeroCartao: {
	// 		field: 'numeroCartao',
	// 		type: DataTypes.INTEGER,
	// 		primaryKey: true,
	// 	},		
		
	// 	digitoCartao: {
	// 		field: 'digitoCartao',
	// 		type: DataTypes.INTEGER,
	// 		allowNull: false
	// 	}

	// }, 
	// {
	// 	tableName: 'dadosCartao', 
	// 	freezeTableName: true, 
	// 	underscored: true,
	// 	timestamps: false,
	// });


    return Usuario;
};
