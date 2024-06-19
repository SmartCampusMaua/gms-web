# Open Data Telemetry - Instituto Mauá de Tecnologia
baseado em https://nextjs.org/learn


Este projeto coleta e disponibiliza dados de sensores do campus do Instituto Mauá de Tecnologia.

## Instalação

Instruções para configurar o ambiente e instalar as dependências necessárias.

```bash
# Clone o repositório
git clone https://github.com/SmartCampusMaua/gms-web.git

# Entre no diretório do projeto
cd gms-web

# Instale as dependências
npm i

# Exportando as variaveis da Database
export POSTGRES_URL="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_PRISMA_URL="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_URL_NO_SSL="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_URL_NON_POOLING="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_USER="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_HOST="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_PASSWORD="{COLOQUE SUAS INFORMAÇÕES AQUI}"
export POSTGRES_DATABASE="{COLOQUE SUAS INFORMAÇÕES AQUI}"
AUTH_SECRET="{COLOQUE SUAS INFORMAÇÕES AQUI}"

# Rode o programa 

npm run dev


# Autenticação
Email: user@nextmail.com
Password: 123456