import User from "./userModel";
import Token from './tokenModel';

User.hasOne(Token, {foreignKey: 'userId'});
Token.belongsTo(User, {foreignKey: 'userId'});