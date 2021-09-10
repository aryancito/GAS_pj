//-----------------SENTIDO DE FALLO--------------------------------------
const sentido_fallo =sheet.getRange('B4').getValue()
const sentido_fallo_sql1 =sheet.getRange('E4').getValue()
const sentido_fallo_sql2 =sheet.getRange('F4').getValue()

const idArchivo_sentido_fallo1=sheet.getRange('C4').getValue()
const archivo_sentido_fallo1=DriveApp.getFileById(idArchivo_sentido_fallo1)
const sentido_falloes1=archivo_sentido_fallo1.getAs(MimeType.PLAIN_TEXT)

//const idArchivo_sentido_fallo2=sheet.getRange('D3').getValue()
//const archivo_sentido_fallo2=DriveApp.getFileById(idArchivo_sentido_fallo2)
//const sentido_falloes2=archivo_sentido_fallo1.getAs(MimeType.PLAIN_TEXT)
//------------------------------------------------------------------

function envio_correos_sentido_fallo() {

  for(var e = 0 ; e < thread .length ; ++e )
  {
    var email = thread [e];
    var message = email.getMessages()
    var asunto = message[0].getSubject()
    if ( asunto.match(sentido_fallo) )
       {
           var html = "<body>";
                html += "<p>Santiago</h2>";
                html += "<p>Por favor, necesitamos que el día de hoy el script adjunto de sentido de fallo.</h4>";
                html += "<p>Por favor nos envían el correo con la salida de los scripts a todos los contactos que se encuentran en el correo.</h4>";
                html += "<h4>enlace del <a href="+ sentido_fallo_sql1 +"> Script </a> Consulta SIJ ASA ASE en SQL </h4>";
                //html += "<h4>enlace del <a href="+ sentido_fallo_sql2 +"> Script </a> Consulta SIJ SUPREMA en SQL </h4>";
                html += "</body>";    
            email.replyAll("incapable of HTML", {
                                                  htmlBody: html,
                                                  attachments:[sentido_falloes1,],
                                                });
            email.markRead();
       }
  }
}