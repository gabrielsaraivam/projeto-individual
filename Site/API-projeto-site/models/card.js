'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Card = sequelize.define('Card',{
		numeroCartao: {
			field: 'numeroCartao',
			type: DataTypes.STRING,
			primaryKey: true,
		},		
		
		digitoCartao: {
			field: 'digitoCartao',
			type: DataTypes.STRING,
			allowNull: false
		},

		fkEstilo: {
			field: 'fkEstilo',
			type: DataTypes.STRING,
			allowNull: true
		}

	}, 
	{
		tableName: 'dadosCartao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});


    return Card;
};