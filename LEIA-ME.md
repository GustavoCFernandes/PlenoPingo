# Studio Pleno Pingo

Landing page estática, sem dependências e sem etapa de compilação.

## Abrir

Abra `index.html` no navegador. Para publicar, envie o conteúdo desta pasta para a hospedagem, mantendo a estrutura.

## Arquivos

- `index.html`: estrutura, textos, links e metadados.
- `css/style.css`: identidade visual e versões para celular, tablet e computador.
- `css/layout.css`: fundo branco, separação das seções e margens dos blocos em degradê.
- `js/main.js`: menu, navegação e preparação do orçamento no WhatsApp.

A navegação interna usa rolagem suave com compensação da altura do menu fixo. Quando o visitante ativa a preferência de movimento reduzido no dispositivo, a navegação ocorre sem animação.
- `assets/`: logo, favicon e imagens fornecidas.

## Contatos

WhatsApp: +55 11 93951-9727.
Instagram: https://www.instagram.com/studioplenopingo/
TikTok: https://www.tiktok.com/@studioplenopingo
LinkedIn: https://www.linkedin.com/in/caio-de-brito-a58788225

O formulário prepara a mensagem e abre o WhatsApp. O visitante revisa e envia a mensagem por lá. Não há servidor, armazenamento de dados ou envio de e-mail. Fotos podem ser anexadas na conversa.

## Avaliações do Google

A seção inclui nota 5,0, 14 avaliações e dois trechos reais de avaliações de nayane elen e Matheus Almeida, consultados no perfil indicado pelo cliente em 14/10/2026. O link direciona ao perfil original. Esse conteúdo é estático e deve ser atualizado manualmente; não há sincronização automática com o Google.

## Personalização

As cores principais estão nas variáveis no começo de `css/style.css`. A fonte Barlow está incluída em assets/fonts, junto à licença. Paleta oficial do manual: #001400, #05A050 e #2C2E99, com branco e transparências para contraste. A home usa banner em toda a largura, com textos e botões sobre a imagem, e altura mínima igual ao espaço de tela disponível abaixo da navegação. Para mudar o telefone, atualize `SITE_CONFIG` no JavaScript e os links `wa.me` no HTML.

## Acessibilidade

Navegação por teclado, link para pular ao conteúdo, campos com rótulos, perguntas com expansão nativa e suporte a movimento reduzido. A página não depende de JavaScript para mostrar conteúdo ou acessar o WhatsApp.

## Degradê e títulos das seções

O degradê original enviado pelo cliente está em `assets/degrade.png`, reutilizado nos botões e fundos coloridos sem alteração das cores. Fundos de conteúdo brancos preservam a leitura. Cada seção usa `.section-label`, com `.section-name` para o nome e `.section-description` para a descrição curta abaixo. A seção de avaliações usa o título SOBRE e o subtítulo Quem conhece, conta, conforme solicitado.
