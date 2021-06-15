module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('cars', {
		id: {
			field: 'id',
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.BIGINT
		},
		mark: {
			field: 'mark',
			allowNull: false,
			type: DataTypes.STRING
		},
        model: {
			field: 'model',
			allowNull: false,
			type: DataTypes.STRING
		},
        description: {
			field: 'description',
			allowNull: false,
			type: DataTypes.TEXT
		},
        slug: {
			field: 'slug',
			allowNull: false,
			type: DataTypes.STRING,
            unique: true
		},
        country: {
			field: 'country',
			allowNull: false,
			type: DataTypes.STRING
		},
        city: {
			field: 'city',
			allowNull: false,
			type: DataTypes.STRING
		},
        image_filename: {
			field: 'image_filename',
			allowNull: false,
			type: DataTypes.STRING
		},
        author_id: {
			field: 'author_id',
			allowNull: false,
			type: DataTypes.BIGINT
		},
        year: {
			field: 'year',
			allowNull: false,
			type: DataTypes.INTEGER
		},
        enabled: {
			field: 'enabled',
			allowNull: false,
			type: DataTypes.BOOLEAN
		},
        created_at: {
			field: 'created_at',
			allowNull: true,
			type: DataTypes.DATE
		},
        updated_at: {
			field: 'updated_at',
			allowNull: true,
			type: DataTypes.DATE
		}
    }, {
		timestamps: false
	});
    
    return Car;
};