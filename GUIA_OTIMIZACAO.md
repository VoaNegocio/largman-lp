# � Manual Mestre de Otimização, Performance e SEO (React + Vite)

Este documento consolida conhecimento técnico profundo para garantir que nossos projetos web atinjam pontuação **100/100 no Lighthouse**, carreguem instantaneamente e sejam acessíveis universalmente.

> **Objetivo:** Zero atrito para o usuário. Performance não é "algo a mais", é feature essencial.

---

## 1. 🏗️ Arquitetura e Setup Inicial

### 1.1 A Escolha da Stack: Estabilidade vs Novidade
Aprendemos (da pior forma) que a "bleeding edge" pode sangrar o projeto.

- **Problema Crítico:** Tailwind CSS v4 + Vite v7.x apresentou condições de corrida (race conditions) no modo de desenvolvimento, onde o CSS não carregava na primeira renderização.
- **Solução Padrão:** Utilize **Tailwind CSS v3.4.17** com `postcss` e `autoprefixer`. É a stack "battle-tested" que garante estabilidade no build e no dev server.

### 1.2 Configuração de Build (Vite)
Para evitar bundles gigantescos, configure o `vite.config.js` para dividir o código corretamente.

```javascript
// vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        // Separa dependências pesadas em chunks cacheados separadamente
        'react-vendor': ['react', 'react-dom'],
        'ui-vendor': ['react-icons'], // Exemplo
        // 'animation-vendor': ['framer-motion'] // CUIDADO: Só inclua se usar!
      }
    }
  }
}
```
**Regra de Ouro:** Revise suas dependências. Se instalou `framer-motion` mas só usou um `animate-pulse` do Tailwind, DESINSTALE. JavaScript não utilizado bloqueia a thread principal.

---

## 2. 🖼️ Deep Dive: Pipeline de Otimização de Imagens

Imagens não otimizadas são o maior vetor de lentidão na web. Não confie apenas no CDN, otimize na fonte.

### 2.1 O Formato WebP
WebP deve ser o padrão padrão para tudo (exceto vetores SVG).
- **Compressão Lossy (Fotos):** Qualidade 80% é indistinguível do original e 70-90% menor.
- **Compressão Lossless (Gráficos):** Ideal para prints e imagens com texto.

### 2.2 Script de Automação (Sharp)
Em vez de depender de serviços online manuais, use este script `optimize-images.js` na raiz do projeto para processar tudo automaticamente:

```javascript
/* optimize-images.js - Requer: npm i -D sharp */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Configuração
const QUALITY = 80;
const MAX_WIDTH_DESKTOP = 1920; // Hero
const MAX_WIDTH_CONTENT = 1000; // Galeria

// Pipeline
async function process() {
  // 1. Converter tudo para WebP
  await sharp('input.jpg')
    .resize({ width: MAX_WIDTH_CONTENT, withoutEnlargement: true }) // Nunca aumente uma imagem pequena
    .webp({ quality: QUALITY })
    .toFile('output.webp');
    
  // 2. Gerar Fallbacks (Apenas onde necessário)
  // Redes sociais não leem WebP em meta tags og:image consistently
  await sharp('logo.png')
    .resize({ width: 1200, height: 630, fit: 'contain', background: '#fff' })
    .jpeg({ quality: 90 })
    .toFile('social-share.jpg');
}
```

### 2.3 Estratégia de Redimensionamento
O navegador não deve redimensionar imagens via CPU. Entregue o tamanho exato.
- **Logos:** Se renderiza a 150px, salve a imagem com 300px (para telas Retina 2x). Não 2000px.
- **Hero:** Crie versões Desktop (`hero-desktop.webp`) e Mobile (`hero-mobile.webp`). Não obrigue o celular a baixar imagem 4K.

---

## 3. ⚡ Core Web Vitals: O Caminho Crítico

Como manipular o navegador para renderizar o que importa primeiro.

### 3.1 LCP (Largest Contentful Paint) - O Hero
O elemento LCP deve carregar **instantaneamente**.

**❌ Errado (Lazy Load no Hero):**
```html
<img src="hero.webp" loading="lazy"> <!-- O navegador vai ATRAZAR o download -->
```
*Nunca use lazy loading na primeira dobra.*

**✅ Certo (Eager + Preload):**
```html
<!-- No HTML (body) -->
<img src="hero-desktop.webp" loading="eager" fetchpriority="high" class="hidden md:block">

<!-- No Head (Preload) -->
<link rel="preload" as="image" href="/hero-desktop.webp" media="(min-width: 768px)" fetchpriority="high" />
<link rel="preload" as="image" href="/hero-mobile.webp" media="(max-width: 767px)" fetchpriority="high" />
```
*Isso diz ao navegador: "Pare tudo e baixe essa imagem AGORA, antes mesmo de saber que ela está no HTML". O atributo `media` garante que o celular não baixe a imagem de desktop.*

### 3.2 CLS (Cumulative Layout Shift) - Estabilidade
Evite que o layout "pule" quando uma imagem carrega.
- **Técnica:** Defina `width` e `height` explícitos no HTML ou use `aspect-ratio` no CSS. O navegador reserva o espaço em branco antes da imagem chegar.
- **Fontes:** Use `font-display: swap` no CSS da fonte para que o texto apareça imediatamente (com fonte do sistema) e troque depois, ao invés de ficar invisível.

---

## 4. 🔍 SEO Técnico: Falando a Língua dos Robôs

SEO não é mágica, é semântica e dados estruturados.

### 4.1 Meta Tags Essenciais (Checklist)
```html
<!-- Básico -->
<title>Título Persuasivo | Marca</title>
<meta name="description" content="Resumo claro e atrativo com palavra-chave principal.">

<!-- Open Graph (WhatsApp/Facebook) -->
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://site.com/social-share.jpg"> <!-- Link ABSOLUTO e JPG! -->

<!-- Favicon (Compatibilidade) -->
<link rel="icon" type="image/png" href="/favicon.png"> <!-- Funciona melhor que .ico hoje -->
```

### 4.2 Structured Data (JSON-LD)
Dê ao Google os dados mastigados. Injete isso no `<head>`.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // ou Organization, Product...
  "name": "Nome da Empresa",
  "image": "https://site.com/logo.jpg",
  "telephone": "+55 11 99999-9999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "Cidade",
    "addressRegion": "SP"
  }
}
</script>
```

### 4.3 tags Canônicas
Evite conteúdo duplicado (ex: `https://site.com` vs `https://www.site.com`).
```html
<link rel="canonical" href="https://site.com/url-final" />
```

---

## 5. ♿ Acessibilidade (A11y)

Acessibilidade melhora SEO e usabilidade para todos.

1.  **Alt Text:**
    *   Informativa: `alt="Cozinha planejada com ilha de mármore"` (Descreve o conteúdo).
    *   Decorativa: `alt=""` (O leitor de tela ignora).
    *   NUNCA: Sem atributo alt.

2.  **Contraste de Cores:**
    *   Fundo branco + Texto cinza claro = Ilegível. Use ferramentas como o "Contrast Checker" do Chrome DevTools. Mínimo 4.5:1 para texto normal.

3.  **Semântica de Headings:**
    *   `h1`: Título da página (Único).
    *   `h2`: Seções principais.
    *   `h3`: Subseções dos H2.
    *   Não pule níveis (H1 -> H3 é errado).

4.  **Botões vs Links:**
    *   Se navega para outra URL: `<a>`.
    *   Se executa ação na página: `<button>`.

---

## 6. Ferramentas Indispensáveis

*   **Google Lighthouse ( DevTools):** Auditoria rápida.
*   **PageSpeed Insights:** O "juiz" final (usa dados de usuários reais - CrUX).
*   **Squoosh.app:** Ótimo para otimizar imagens pontuais manualmente com preview visual.
*   **Headless UI / Radix UI:** Componentes acessíveis (modais, dropdowns) prontos para React, muito melhores que fazer do zero.

---

Este guia é um documento vivo. A web evolui, e nossas práticas também. Mantenha-o atualizado com cada novo aprendizado em campo.
