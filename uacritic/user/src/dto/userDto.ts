class UserDto {
    email: string;
    id: number;
    isActivated: boolean;
    username: string;

    constructor(model: UserDto) {
        this.email = model.email;
        this.id = model.id;
        this.username = model.username;
        this.isActivated = model.isActivated!;
    }
}

export default UserDto;