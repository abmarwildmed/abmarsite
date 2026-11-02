import {NextRequest,NextResponse} from 'next/server';
const files:Record<string,{name:string;type:string}>={
'estatuto-comissao':{name:'2022ESTATUTO-DA-COMISSAO-ACADEMICA-DA-ASSOCIACAO-BRASILEIRA-DE-MEDICINA-DE-AREAS-REMOTAS-E-ESPORTE-DE-AVENTURA.pdf',type:'application/pdf'},
'edital-diretoria':{name:'2022EDITAL-DE-SELECAO-PARA-DIRETORIA-COMISSAO-ACADEMICA.pdf',type:'application/pdf'},
'modelo-declaracao':{name:'modelodeclaracao.docx',type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'},
'modelo-estatuto':{name:'exemplo-de-estatuto-para-abertura-de-liga.docx',type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
};
export async function GET(_request:NextRequest,{params}:{params:Promise<{slug:string}>}){
const {slug}=await params;const file=files[slug];if(!file)return new NextResponse('Documento não encontrado',{status:404});
try{const url='https://raw.githubusercontent.com/abmarwildmed/abmarsite/main/'+encodeURIComponent(file.name);const response=await fetch(url,{cache:'no-store'});if(!response.ok)throw new Error('Download indisponível');const bytes=await response.arrayBuffer();return new NextResponse(bytes,{headers:{'Content-Type':file.type,'Content-Disposition':'attachment; filename="'+file.name+'"','Cache-Control':'public, max-age=3600','Content-Length':String(bytes.byteLength)}})}catch{return new NextResponse('Arquivo temporariamente indisponível',{status:502})}
}
