export class FileTempDto {

    public checksumValue: string;
    public originalFileName: string;
    public fileName: string;
    public name: string;
    public id: string;

    constructor(checksumValue: string, originalFileName: string ,fileName: string ,name: string,id: string){
        this.checksumValue = checksumValue;
        this.originalFileName = originalFileName;
        this.fileName = fileName;
        this.name = name;
        this.id = id;
    }
}
