# mvp_sprint2
MVP da sprint 2 - Engenharia de Software PUCRio

Projeto da Sprint 2 do curso de Especialização em Engenharia de Software da PUC-Rio. 

O projeto consiste em uma API para gerenciamento de medidores de uma plataforma ou unidade de produção de Óleo e Gás.
O sistema permite cadastrar, consultar, editar e deletar medidores. É possível, também, cadastrar certificados de calibração para cada medidor.

O projeto também contém um serviço com um front-end que possui o objetivo de criar identificação QR que aponta para a pasta de rede de cada medidor, onde se encontra a documentação relacionada ao respectivo medidor. Este serviço é importante, principalmente em auditorias, onde é necessário apresentar toda documentação de projetos e manutenção dos medidores. Este serviço faz uso da api-rest para buscar dados de um medidor específico que está em um banco de dados sqlite.

O serviço de geração de QR code acessa uma API externa pública, cuja documentação está acessível no link: https://goqr.me/api/doc/create-qr-code/

Tanto a api rest, quanto o serviço com front-end possuem um dockfile que deve ser startado. 

Para executar o projeto, há um readme.md com instruções dentro de cada pasta do serviço.

Autor: Cinthia Gabriella Pereira
