# 🚀 Template Landing Page Next.js + Contentful

Um template moderno e responsivo de landing page construído com Next.js e integrado ao Contentful CMS. Ideal para criar landing pages dinâmicas e blogs com gestão de conteúdo simplificada.

## ✨ Características

- 📱 Design responsivo e moderno
- 🎨 Estilização com Tailwind CSS
- 📝 Contentful CMS para gestão de conteúdo
- 🖼️ Otimização de imagens com Next/Image
- 🔄 ISR (Incremental Static Regeneration)
- 🎯 SEO otimizado
- 🌐 Internacionalização pronta (pt-BR)
- ⚡ Performance otimizada

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentful CMS](https://www.contentful.com/)

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Uma conta no Contentful (gratuita ou paga)
- NPM ou Yarn

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone [url-do-repositorio]
cd template-landing-nextjs-contentful
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o Contentful

1. Crie uma conta no [Contentful](https://www.contentful.com/)
2. Crie um novo espaço
3. No Contentful, vá para Settings > API Keys
4. Crie uma nova API key
5. Copie o arquivo .env.example para .env.local:
   ```bash
   cp .env.example .env.local
   ```
6. Preencha as variáveis de ambiente no arquivo .env.local:
   ```env
   CONTENTFUL_SPACE_ID=seu_space_id
   CONTENTFUL_ACCESS_TOKEN=seu_access_token
   ```

### 4. Configure os Content Types no Contentful

#### Hero Section
| Campo | Tipo |
|-------|------|
| title | Text |
| subtitle | Text |
| ctaText | Text |
| backgroundImage | Media |

#### Feature
| Campo | Tipo |
|-------|------|
| title | Text |
| description | Text |
| icon | Text |
| order | Number |

#### Blog Post
| Campo | Tipo |
|-------|------|
| title | Text |
| slug | Text |
| content | Rich Text |
| featuredImage | Media |
| excerpt | Text |
| author | Text |
| publishedDate | Date |

### 5. Execute o projeto

Desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Build de produção:
```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## 🎨 Personalização

### Cores e Estilos

O projeto usa Tailwind CSS para estilização. Você pode personalizar as cores e outros estilos no arquivo `tailwind.config.js`.

### Componentes

Os principais componentes estão em `src/components/`:
- `Hero.tsx` - Seção principal
- `Features.tsx` - Grade de recursos
- `BlogPosts.tsx` - Lista de posts do blog

### Conteúdo

Todo o conteúdo é gerenciado através do Contentful. Para atualizar:
1. Faça login no Contentful
2. Navegue até Content
3. Selecione o tipo de conteúdo que deseja editar
4. Faça suas alterações
5. Publique

## 🔄 ISR (Incremental Static Regeneration)

O template utiliza ISR para revalidação de conteúdo a cada 60 segundos. Você pode ajustar este valor no arquivo `src/pages/index.tsx`:

```typescript
export const getStaticProps: GetStaticProps = async () => {
  // ...
  return {
    props: { ... },
    revalidate: 60, // Ajuste este valor conforme necessário
  };
};
```

## 📱 Responsividade

O template é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia o guia de contribuição antes de submeter pull requests.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Suporte

Para suporte, por favor abra uma issue no repositório ou entre em contato através de [seu-email@exemplo.com].

---

Feito com ❤️ por [Seu Nome/Empresa]
