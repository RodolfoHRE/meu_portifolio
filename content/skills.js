// Lista de tecnologias do carrossel da seção Skills.
// Para plugar/trocar um logo:
//   1. Coloque o arquivo (SVG mono de preferência) em `public/logos/`.
//   2. Referencie o nome do arquivo no campo `logo` (ex: logo: 'docker.svg').
// Com `logo: null` o item renderiza o `name` como texto mono (fallback). Nenhuma
// mudança de JSX é necessária ao adicionar, trocar ou remover techs.
const skills = [
  { name: 'Python', logo: 'python.svg' },
  { name: 'JavaScript', logo: 'javascript.svg' },
  { name: 'Django', logo: 'django.svg' },
  { name: 'Flask', logo: 'flask.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'Tailwind', logo: 'tailwind.svg' },
  { name: 'Docker', logo: 'docker.svg' },
];

export default skills;
