import {BaseDto} from "./BaseDto.model";

export class RoleDto extends BaseDto{

    public authority: string = '';
    public label: string = '';

    public getClassName() {
        return "User";
    }
}
