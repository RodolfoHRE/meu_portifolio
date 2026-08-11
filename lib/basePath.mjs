// Fonte única de verdade do nome do repo / basePath do GitHub Pages.
// Renomear o repo = mudar só o `repo` aqui (next.config.mjs e os componentes leem daqui).
export const repo = 'portfolio';
export const basePath = process.env.NODE_ENV === 'production' ? `/${repo}` : '';
