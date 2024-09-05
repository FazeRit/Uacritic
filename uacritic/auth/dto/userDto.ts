class UserDto {
    email: string;
    id: number;
    isActivated: boolean;

    constructor(model: UserDto) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated!;
    }
}

export default UserDto;