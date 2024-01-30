import {BaseDto} from './BaseDto.model';

export class PaginatedList<DTO extends BaseDto> {
    public list: null | Array<DTO> = null;
    public dataSize: number = 0;
}
