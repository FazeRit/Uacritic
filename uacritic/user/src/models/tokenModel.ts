import {DataTypes, Model} from 'sequelize';
import db from '../db/db';

interface TokenAttributes {
    id?: number;
    accessToken: string;
    userId: number;
}

class Token extends Model<TokenAttributes> implements TokenAttributes {
    id!: number;
    accessToken!: string;
    userId!: number;
}

Token.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
    accessToken: {type: DataTypes.STRING, allowNull: false},
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
}, {
    sequelize: db,
    tableName: 'token',
});

export default Token;