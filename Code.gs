/**
 * BATIZADO DÉLIO — GOOGLE APPS SCRIPT
 *
 * Cole este código no Apps Script ligado à Google Sheet.
 * A implementação deve estar publicada como Aplicação Web.
 *
 * Executar como: Eu
 * Quem tem acesso: Qualquer pessoa
 */

function doPost(e) {
  try {
    const sheet = getSheet_();

    const p = e.parameter || {};

    sheet.appendRow([
      new Date(),
      p.nome || "",
      p.telefone || "",
      Number(p.convidados || 0),
      p.resposta || "",
      p.mensagem || ""
    ]);

    return HtmlService.createHtmlOutput(
      '<!doctype html><html><body>OK</body></html>'
    );

  } catch (error) {
    return HtmlService.createHtmlOutput(
      '<!doctype html><html><body>ERRO</body></html>'
    );
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  let sheet = ss.getSheetByName("RSVP");

  if (!sheet) {
    sheet = ss.insertSheet("RSVP");

    sheet.appendRow([
      "Data/Hora",
      "Nome",
      "Telefone",
      "Nº de pessoas",
      "Resposta",
      "Observação"
    ]);

    sheet.setFrozenRows(1);
  }

  return sheet;
}
