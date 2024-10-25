export interface servicosModel{
    //nome do serviço
    titulo:string,
    //Texto que vai para a secção de introdução no banner dos serviços
    introducaoSeccao: string,
    //Pontos característicos do serviço
    caracteristicaServico:string[],
    // Descrição do serviço
    descricao: string, 
    // Lista de trabalhos realizados
    trabalhosRealizados: string[]

}