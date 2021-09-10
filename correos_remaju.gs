//-----------------REMAJU--------------------------------------
const remaju =sheet.getRange('B3').getValue()
const remaju_sql1 =sheet.getRange('E3').getValue()
const remaju_sql2 =sheet.getRange('F3').getValue()

const idArchivo_remaju1=sheet.getRange('C3').getValue()
const archivo_remaju1=DriveApp.getFileById(idArchivo_remaju1)
const remajues1=archivo_remaju1.getAs(MimeType.PLAIN_TEXT)

//const idArchivo_remaju2=sheet.getRange('D3').getValue()
//const archivo_remaju2=DriveApp.getFileById(idArchivo_remaju2)
//const remajues2=archivo_remaju1.getAs(MimeType.PLAIN_TEXT)
//------------------------------------------------------------------

function envio_correos_remaju() {

  for(var e = 0 ; e < thread .length ; ++e )
  {
    var email = thread [e];
    var message = email.getMessages()
    var asunto = message[0].getSubject()
    if ( asunto.match(remaju) )
       {
           var html = "<body>";
                html += "<p>Santiago</h2>";
                html += "<p>Por favor, necesitamos que los scripts adjuntos para REMAJU se ejecuten.</h4>";
                html += "<p>Por favor nos envían el correo con la salida de los scripts a todos los contactos que se encuentran en el correo.</h4>";
                html += "<h4>enlace del <a href="+ remaju_sql1 +"> Script </a> Consulta SIJ ASA ASE en SQL </h4>";
                //html += "<h4>enlace del <a href="+ remaju_sql2 +"> Script </a> Consulta SIJ SUPREMA en SQL </h4>";
                html += "</body>";    
            email.replyAll("incapable of HTML", {
                                                  htmlBody: html,
                                                  attachments:[remajues1,],
                                                });
            email.markRead();
       }
  }
}