# 🏠 Cantinho do Kilamba Conforto - Instruções de Deploy

## 📋 Conteúdo da Pasta `dist/`

A pasta **`dist/`** contém todos os arquivos compilados e prontos para produção:

```
dist/
├── index.html          (Arquivo principal da aplicação)
├── favicon.ico         (Ícone da página)
├── .nojekyll           (Configuração GitHub Pages)
├── .htaccess           (Configuração Apache para Infinity Free)
├── assets/
│   └── index-Dfxm_a23.js  (JavaScript otimizado e minificado - 593KB)
└── img/                (Todas as imagens da casa)
    ├── Quarto.jpeg
    ├── Quarto1.jpeg
    ├── piscina.jpeg
    ├── cozinha.jpeg
    ├── quintal.jpeg
    ├── sala de estar.jpeg
    └── ... (16 imagens no total)
```

## 🚀 Como Fazer Deploy

### Opção 1: GitHub Pages (Recomendado)
1. O repositório já está configurado para GitHub Pages
2. Aceda a: https://nelsontgpsi.github.io/kilamba/
3. O site está **100% funcional** e atualizado

### Opção 2: Infinity Free
1. Faça upload do conteúdo da pasta `dist/` via FTP:
   - Todos os arquivos `.html`, `.js`, `.ico`, `.htaccess`
   - A pasta `img/` com todas as imagens
   - A pasta `assets/` com o JavaScript

2. Estrutura esperada no servidor:
```
/public_html/kilamba/
├── index.html
├── favicon.ico
├── .htaccess
├── assets/
└── img/
```

3. O arquivo `.htaccess` configura automaticamente o roteamento para SPA

## ✅ Funcionalidades Ativas

- ✅ Navegação fluida com scroll suave
- ✅ Navbar responsiva (cores mudam ao rolar)
- ✅ 6 Quartos Suites com imagens
- ✅ Características da casa (Climatização, Piscina, Cozinha, Quintal, Internet, Suites)
- ✅ Formulário dinâmico que envia dados para WhatsApp
- ✅ Botões "Reserve Já" conectados ao WhatsApp
- ✅ Contacto: +244 924 839 329
- ✅ Preço destacado: 40.000 Kz por quarto/diária

## 📱 Links WhatsApp

- Botão Hero: `https://wa.me/244924839329`
- Botão Suites: `https://wa.me/244924839329?text=Olá, gostaria de reservar uma suite.`
- Formulário: Envia dados preenchidos dinamicamente

## ⚙️ Otimizações Implementadas

- ✅ Minificação de JavaScript (593KB gzip: 154KB)
- ✅ Imagens locais (não depende de URLs externas)
- ✅ CSS via CDN Tailwind (carregamento rápido)
- ✅ Fontes do Google Fonts (pré-carregadas)
- ✅ SPA (Single Page Application) - sem recarregos
- ✅ .nojekyll para GitHub Pages
- ✅ .htaccess para Infinity Free

## 🔍 Teste de Funcionalidade

Tudo foi testado e está funcionando:
- Navegação entre seções ✅
- Envio de formulário para WhatsApp ✅
- Links responsivos ✅
- Performance otimizada ✅

## 📝 Notas

- O site é uma SPA (Single Page Application)
- Não necessita de backend ou banco de dados
- Todas as integrações são apenas frontend
- As imagens são servidas localmente do servidor
- O formulário envia dados via WhatsApp Web

---
**Deploy pronto para produção! 🚀**
