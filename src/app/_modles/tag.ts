export class tag{
    static readonly ANGULAR=new tag('Angular','Baby Blue');
        static readonly TYPESCRIPT=new tag('Typescript','Light Powder Blue		');
    static readonly PYTHON=new tag('Python','Light Powder Blue	');
    static readonly CSHARP=new tag('Csharp','Pale Blue	');
    static readonly JAVA=new tag('Java','Light Powder Blue	');
    static readonly NODEJS=new tag('Node.JS','Light Powder Blue	');
    static readonly ASPNET=new tag('ASP.NET','Light Powder Blue	');
    static readonly JAVASCRIPT=new tag('Javascript','Light Powder Blue	');
    static readonly REACT=new tag('React','Alice Blue	');

    private constructor(private readonly key:string,public readonly color:string){

    }
    tostring(){
        return this.key;
    }
}