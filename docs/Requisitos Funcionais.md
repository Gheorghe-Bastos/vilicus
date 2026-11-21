# Requisitos Funcionais — Vilicus

Documento de especificação dos requisitos funcionais do sistema de gestão de quadros (boards), colunas e cards com suporte a quadros hierárquicos.

---

## 1. Visão geral

O sistema deve permitir que usuários autenticados organizem seu trabalho por meio de **quadros** contendo **colunas** e **cards**, com recursos de descrição, etiquetas, membros, prazos, checklists e comentários. Além disso, um card pode conter um **quadro interno** (subquadro), permitindo organização hierárquica em vários níveis.

### Glossário

| Termo | Definição |
|---|---|
| Quadro (Board) | Contêiner principal de organização, composto por colunas. |
| Coluna (Column/List) | Agrupamento dentro de um quadro que contém cards. |
| Card | Unidade de trabalho dentro de uma coluna. |
| Quadro interno | Quadro vinculado a um card, criando hierarquia entre quadros. |
| Etiqueta (Label) | Marcador visual associado a um card. |
| Membro | Usuário associado a um card. |
| Checklist | Lista de itens de verificação dentro de um card. |

### Atores

- **Usuário não autenticado:** pode cadastrar conta e fazer login.
- **Usuário autenticado:** acessa e manipula quadros, colunas, cards e recursos associados.

---

## 2. Requisitos funcionais

### 2.1 Quadros

| ID | Nome | Descrição | Prioridade |
|---|---|---|---|
| RF01 | Gerenciar quadros | O sistema deve permitir criar, visualizar e editar quadros. | Alta |
| RF13 | Criar quadros vinculados a cards | O sistema deve permitir criar quadros vinculados a cards, originando quadros internos. | Média |
| RF14 | Acessar quadros internos | O sistema deve permitir acessar e visualizar quadros internos a partir dos respectivos cards. | Média |
| RF16 | Manter vínculo card/quadro | O sistema deve manter o vínculo entre o card de origem e o quadro interno. | Média |
| RF17 | Hierarquia de quadros | O sistema deve permitir a criação de quadros em diferentes níveis hierárquicos. | Média |

### 2.2 Colunas

| ID | Nome | Descrição | Prioridade |
|---|---|---|---|
| RF02 | Gerenciar colunas | O sistema deve permitir criar, visualizar, editar e organizar colunas dentro dos quadros. | Alta |
| RF15 | Colunas em quadros internos | O sistema deve permitir criar colunas e cards dentro dos quadros internos. | Média |

### 2.3 Cards

| ID | Nome | Descrição | Prioridade |
|---|---|---|---|
| RF03 | Gerenciar cards | O sistema deve permitir criar, visualizar e editar cards dentro das colunas. | Alta |
| RF11 | Mover cards | O sistema deve permitir mover cards entre colunas. | Alta |
| RF12 | Atualizar cards | O sistema deve permitir atualizar as informações dos cards após sua criação. | Alta |

### 2.4 Detalhes dos cards

| ID | Nome | Descrição | Prioridade |
|---|---|---|---|
| RF04 | Descrições | O sistema deve permitir adicionar e editar descrições dos cards. | Média |
| RF05 | Etiquetas | O sistema deve permitir criar e associar etiquetas aos cards. | Média |
| RF06 | Membros | O sistema deve permitir adicionar membros aos cards. | Média |
| RF07 | Prazos | O sistema deve permitir definir prazos para os cards. | Média |
| RF08 | Checklists | O sistema deve permitir criar checklists dentro dos cards. | Média |
| RF09 | Itens de checklist | O sistema deve permitir adicionar, editar e marcar itens dos checklists como concluídos. | Média |
| RF10 | Comentários | O sistema deve permitir adicionar e visualizar comentários nos cards. | Média |

### 2.5 Autenticação

| ID | Nome | Descrição | Prioridade |
|---|---|---|---|
| RF18 | Cadastro e login | O usuário deve poder cadastrar sua conta e também fazer login com uma conta existente. | Alta |

---

## 3. Critérios de aceitação

### RF01 — Gerenciar quadros
- O usuário pode criar um quadro informando ao menos um nome.
- O usuário pode listar e visualizar os quadros de que participa.
- O usuário pode editar nome e demais dados do quadro.
- Alterações devem ser refletidas imediatamente na interface.

### RF02 — Gerenciar colunas
- O usuário pode criar colunas em um quadro.
- O usuário pode renomear, editar e reordenar colunas.
- Colunas pertencem a um único quadro.

### RF03 — Gerenciar cards
- O usuário pode criar cards dentro de uma coluna.
- O usuário pode visualizar os cards da coluna.
- O usuário pode editar os dados do card.

### RF04 — Descrições
- O usuário pode adicionar uma descrição a um card vazio.
- O usuário pode editar e remover a descrição existente.

### RF05 — Etiquetas
- O usuário pode criar etiquetas com nome e cor.
- O usuário pode associar e desassociar etiquetas de um card.
- O card exibe as etiquetas associadas.

### RF06 — Membros
- O usuário pode adicionar membros a um card.
- O usuário pode remover membros de um card.
- O card exibe os membros associados.

### RF07 — Prazos
- O usuário pode definir uma data de prazo para o card.
- O usuário pode alterar ou remover o prazo.
- O card sinaliza visualmente prazos vencidos ou próximos.

### RF08 — Checklists
- O usuário pode criar um checklist dentro de um card.
- O usuário pode criar múltiplos checklists por card.

### RF09 — Itens de checklist
- O usuário pode adicionar itens a um checklist.
- O usuário pode editar o texto de um item.
- O usuário pode marcar e desmarcar itens como concluídos.
- O progresso do checklist é exibido (itens concluídos / total).

### RF10 — Comentários
- O usuário pode adicionar comentários a um card.
- Os comentários são exibidos em ordem cronológica com autor e data.

### RF11 — Mover cards
- O usuário pode mover um card para outra coluna do mesmo quadro.
- O usuário pode reordenar cards dentro de uma coluna.

### RF12 — Atualizar cards
- O usuário pode editar título e demais informações após a criação.
- As alterações persistem e são refletidas para todos os usuários com acesso.

### RF13 — Quadros vinculados a cards
- O usuário pode criar um quadro interno a partir de um card.
- O quadro interno é associado ao card que o originou.

### RF14 — Acessar quadros internos
- A partir do card, o usuário pode abrir o quadro interno correspondente.
- O quadro interno é exibido com suas próprias colunas e cards.

### RF15 — Conteúdo de quadros internos
- O usuário pode criar colunas e cards dentro de quadros internos.
- Os recursos de colunas e cards aplicam-se igualmente aos quadros internos.

### RF16 — Vínculo card/quadro
- O vínculo entre card de origem e quadro interno é preservado.
- Ao excluir o card de origem, o sistema deve tratar o quadro interno conforme regra definida (exclusão em cascata ou desvinculação).

### RF17 — Hierarquia de quadros
- É possível criar quadros internos a partir de cards de quadros internos, em múltiplos níveis.
- O sistema deve evitar ciclos na hierarquia (um quadro não pode conter a si mesmo, direta ou indiretamente).
- O usuário deve conseguir navegar entre os níveis hierárquicos.

### RF18 — Cadastro e login
- O usuário pode criar uma conta com dados válidos.
- O usuário pode autenticar-se com e-mail e senha.
- O sistema deve impedir cadastro com e-mail já existente.
- O sistema deve tratar erros de credenciais inválidas.

---

## 4. Regras de negócio

1. Um card pertence a exatamente uma coluna; uma coluna pertence a exatamente um quadro.
2. Um quadro interno pertence a exatamente um card de origem (RF16).
3. A hierarquia de quadros não pode conter ciclos (RF17).
4. Etiquetas, checklists e comentários existem no escopo de um card.
5. Apenas usuários autenticados podem manipular quadros, colunas e cards.
