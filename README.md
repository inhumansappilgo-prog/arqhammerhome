# H.A.M.M.E.R. — PROTOCOLO AXIAL

Pacote estático preparado para GitHub Pages e incorporação em uma página do Tumblr.

## Estrutura

```text
github-iframe/
├── index.html
├── axial-os.css
├── axial-os.js
├── .nojekyll
└── TUMBLR-EMBED.html
```

O arquivo `index.html` contém a estrutura e o conteúdo. A identidade visual e a responsividade ficam em `axial-os.css`. As rotinas de interface ficam em `axial-os.js`. O arquivo `.nojekyll` instrui o GitHub Pages a publicar os arquivos exatamente como estão. `TUMBLR-EMBED.html` contém o bloco pronto para incorporar a página.

## 1. Publicar no GitHub Pages

1. Abra o repositório `arqhammerinicio` no GitHub.
2. Dentro do repositório, escolha **Add file → Upload files**.
3. Envie o **conteúdo** desta pasta, mantendo `index.html` na raiz do repositório. A pasta `github-iframe` não deve ficar como uma camada adicional.
4. Confirme o envio em **Commit changes**.
5. Abra **Settings → Pages**.
6. Em **Build and deployment**, selecione **Deploy from a branch**.
7. Escolha a branch **main**, a pasta **/(root)** e clique em **Save**.
8. Aguarde a publicação. O endereço seguirá este formato:

```text
https://inhumansappilgo-prog.github.io/arqhammerinicio/
```

Abra esse endereço antes de seguir. Se a página não aparecer, confira se `index.html` está na raiz e se o endereço respeita maiúsculas e minúsculas.

## 2. Transformar a página em iframe

Abra `TUMBLR-EMBED.html`. O endereço publicado do repositório `arqhammerinicio` já está preenchido.

O resultado central será:

```html
<iframe
  src="https://inhumansappilgo-prog.github.io/arqhammerinicio/"
  title="H.A.M.M.E.R. — Protocolo Axial"
  loading="eager"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="fullscreen"
></iframe>
```

Os links internos da página publicada usam `target="_top"`. Assim, `/616`, `/axial` e `/fichas` abrem no Tumblr inteiro, sem ficarem confinados dentro do iframe.

## 3. Incorporar no Tumblr como página inicial

1. No Tumblr pelo navegador, abra **Configurações** e selecione o blog.
2. Ative **Tema personalizado**, caso ainda esteja desativado.
3. Escolha **Editar tema**.
4. Na seção **Páginas**, clique em **Adicionar uma página**.
5. Selecione **Layout Personalizado**.
6. Defina a rota desejada, por exemplo `/inicio`.
7. Copie todo o conteúdo já ajustado de `TUMBLR-EMBED.html` e cole no editor HTML da página.
8. Defina o título, ative **Mostrar um link para esta página** se desejar e clique em **Salvar**.

Para substituir visualmente a home inteira do tema, o mesmo bloco pode ser integrado ao HTML principal do tema. Salve uma cópia do tema atual antes da alteração. A página personalizada em `/inicio` é a implementação mais segura e reversível.

## 4. Atualizações futuras

Para mudar textos, destinos ou imagens, edite `index.html`. Para mudar cores, dimensões ou animações, edite `axial-os.css`. Para alterar comportamentos da interface, edite `axial-os.js`. Depois envie os arquivos modificados ao mesmo repositório e confirme um novo commit. O GitHub Pages atualiza a publicação automaticamente; o código do Tumblr não precisa ser alterado.

## Diagnóstico rápido

- **Página sem estilo:** confirme se `axial-os.css` está na mesma pasta que `index.html`.
- **Erro 404:** confirme que GitHub Pages usa `main` e `/(root)` e que `index.html` está na raiz.
- **Tela vazia no Tumblr:** use somente endereço `https://` no atributo `src`.
- **Links abrindo dentro do quadro:** confirme que os três links em `index.html` mantêm `target="_top"`.
- **Layout móvel diferente:** desative o tema móvel padrão do Tumblr apenas se o tema personalizado responsivo estiver sendo substituído por ele.

## Documentação oficial

- [Configurar a fonte de publicação do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Páginas de layout personalizado no Tumblr](https://help.tumblr.com/pt-br/paginas-de-layout-personalizado/)
- [Editar o HTML personalizado do Tumblr](https://help.tumblr.com/pt-br/html-personalizado/)
