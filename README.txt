BATIZADO DÉLIO — VERSÃO ATUALIZADA
===================================

O index.html já está configurado com este URL do Google Apps Script:

https://script.google.com/macros/s/AKfycbzq4dcXPDUihTaI6aeSh3gExhUrhtymcGK2C2HpezW4rrFPN14v9qva_6_yhvq8uEsj/exec

1. Abra a Google Sheet usada para as confirmações.
2. Extensões > Apps Script.
3. Substitua o código pelo conteúdo de Code.gs.
4. Guarde.
5. Implementar > Gerir implementações.
6. Confirme que é uma Aplicação Web.
7. Executar como: Eu.
8. Quem tem acesso: Qualquer pessoa.
9. Se alterou o código, crie uma nova versão da implementação.

O formulário do index.html usa POST HTML + iframe invisível.
Não usa fetch(), portanto evita o problema anterior de ficar preso em
"A ENVIAR..." quando o site é aberto localmente.

TESTE:
- Nome: Teste
- Telefone: 910000000
- Pessoas: 2
- Resposta: Sim

Depois verifique a folha RSVP.

Se a folha RSVP não existir, o Code.gs cria-a automaticamente.
