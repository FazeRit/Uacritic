import {DataTypes, Model} from 'sequelize';
import db from '../db/db';

export interface UserAttributes {
    id?: number;
    email: string;
    password: string;
    isActivated: boolean;
    activationLink?: string;
    dateOfBirth?: Date;
    username: string;
    role?: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    email!: string;
    password!: string;
    isActivated!: boolean;
    activationLink?: string;
    dateOfBirth!: Date;
    username!: string;
    role!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activationLink: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    },
    dateOfBirth: {
        type: DataTypes.DATE,
    }
}, {
    sequelize: db,
    tableName: 'user'
});

export default User;