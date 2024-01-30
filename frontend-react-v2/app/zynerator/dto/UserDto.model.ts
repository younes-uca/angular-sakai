import {BaseDto} from "./BaseDto.model";
import {RoleDto} from "./RoleDto.model";

export class UserDto extends BaseDto {

    public roles: null | Array<RoleDto> = null;
    public email: string;
    public telephone: string;
    public nom: string;
    public prenom: string;
    public dateNaissance: Date;
    public credentialsNonExpired: boolean;
    public enabled: boolean;
    public accountNonExpired: boolean;
    public accountNonLocked: boolean;
    public passwordChanged: boolean;
    public username: string;
    public password: string;

    constructor() {
        super();
        this.email = '';
        this.telephone = '';
        this.nom = '';
        this.prenom = '';
        this.dateNaissance = new Date();
        this.credentialsNonExpired = false;
        this.enabled = false;
        this.accountNonExpired = false;
        this.accountNonLocked = false;
        this.passwordChanged = false;
        this.username = '';
        this.password = '';
    }

    public getClassName() {
        return "User";
    }
}
