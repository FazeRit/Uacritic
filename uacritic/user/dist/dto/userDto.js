"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDto {
    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.username = model.username;
        this.isActivated = model.isActivated;
    }
}
exports.default = UserDto;
