npm start -> inicia live server
tsc -w -> Inicia monitoramento do type script 

_______
noImplicitAny => setar ou não o tipo "any" implicitamente;

sourceMap => gera o arquivo de mapeamento do TS para o JS e 
permite debugar no navegador;

target=> versão desejada do javascript para transpile

strictNullChecks => checa o código para verificar se pode gerar algum valor nulo

noUnusedLocals => verifica se as variáveis locais estão sendo usadas

noUnusedParameters => Verifica se algum parâmetro não está sendo usado


outDir => pasta de saída do JS

outFile=> pode ser configurado para todos os arquivos darem build dentro de um só, porém, não é compatível com o padrão commonjs da tag module, aí teria que mudar de  commonjs para System, por exemplo

noEmitOnError => gerar ou não o arquivo js se o ts tiver erros
______

Links Úteis

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://www.typescriptlang.org/docs/handbook/compiler-options.html