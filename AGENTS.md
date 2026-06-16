# Gabi Estudos — Instruções para o Codex

## Objetivo

Este projeto é um app de estudos para uma estudante. O foco principal é ajudar a aprender e revisar matérias escolares com aulas curtas, exemplos, imagens, vídeos recomendados, flashcards, treino, provas personalizadas, revisão de erros e área dos pais.

## Princípio de produto

O fluxo principal do app é:
Estudar → Ver exemplos → Assistir conteúdo recomendado → Treinar → Fazer prova → Revisar erros.

A prova não é o único produto. Ela é apenas uma etapa do ciclo de aprendizagem.

## Roadmap

1. App com aulas mockadas
2. Vídeos recomendados mockados
3. Flashcards
4. Treino guiado
5. Criador de provas
6. Revisão de erros
7. Área dos pais
8. Supabase
9. IA para gerar aulas e provas
10. YouTube API / curadoria de vídeos
11. Imagens abertas com crédito

## Regras de conteúdo

* Não copiar apostilas privadas, livros protegidos ou conteúdo de plataformas fechadas.
* Não usar conteúdo do Anglo, Plurall ou similares.
* Não fazer scraping de plataformas privadas.
* Não baixar vídeos do YouTube.
* Vídeos devem ser cadastrados como links ou embeds.
* Usar conteúdo autoral de exemplo na primeira versão.
* Usar BNCC apenas como referência de organização curricular.
* Futuramente, qualquer conteúdo externo deve ter fonte, autor, licença e link.

## Regras técnicas

* Usar Next.js, React e TypeScript.
* Usar CSS simples e responsivo.
* Usar localStorage na primeira versão.
* Não adicionar Supabase sem aprovação.
* Não adicionar IA real sem aprovação.
* Não usar API keys hardcoded.
* Futuras chaves devem ir em variáveis de ambiente.
* Manter componentes pequenos e fáceis de entender.
* Explicar mudanças importantes de forma direta, pois o dono do projeto é iniciante.

## Componentes principais

* Home
* StudySelector
* LessonPage
* VideoRecommendations
* Flashcards
* PracticeMode
* CreateExam
* TakeExam
* Results
* ReviewMistakes
* ParentDashboard
* QuestionRenderer

## Dados iniciais

Manter dados mockados em data/curriculum.ts.

Cada tema deve conter:

* ano escolar
* matéria
* tema
* explicação
* resumo
* exemplo prático
* conceitos importantes
* imagem
* vídeos recomendados
* flashcards
* questões de treino

## Testes manuais obrigatórios

Depois de alterações relevantes, verificar:

1. A tela inicial abre.
2. É possível escolher um tema.
3. A página de aula aparece.
4. Os vídeos recomendados aparecem.
5. Os flashcards funcionam.
6. O treino funciona.
7. É possível criar uma prova.
8. É possível responder a prova.
9. O resultado aparece.
10. Os erros ficam salvos para revisão.
