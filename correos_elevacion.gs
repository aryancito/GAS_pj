//-----------------ELEVACIONES--------------------------------------
const elevacion =sheet.getRange('B2').getValue()
const elevacion_sql1 =sheet.getRange('E2').getValue()
const elevacion_sql2 =sheet.getRange('F2').getValue()

const idArchivo_elevacion1=sheet.getRange('C2').getValue()
const archivo_elevacion1=DriveApp.getFileById(idArchivo_elevacion1)
const elevaciones1=archivo_elevacion1.getAs(MimeType.PLAIN_TEXT)

const idArchivo_elevacion2=sheet.getRange('D2').getValue()
const archivo_elevacion2=DriveApp.getFileById(idArchivo_elevacion2)
const elevaciones2=archivo_elevacion2.getAs(MimeType.PLAIN_TEXT)
//------------------------------------------------------------------

function envio_correos_elevacion() {

  for(var e = 0 ; e < thread .length ; ++e )
  {
    var email = thread [e];
    var message = email.getMessages()
    var asunto = message[0].getSubject()
    if ( asunto.match(elevacion) )
       {
           var html = "<body>";
                html += "<p>Santiago</h2>";
                html += "<p>Por favor, necesitamos que los scripts adjuntos de elevaciones se ejecuten en la base de datos de SIJ.</h4>";
                html += "<p>Por favor nos envían el correo con la salida de los scripts a todos los contactos que se encuentran en el correo.</h4>";
                html += "<h4>enlace del <a href="+ elevacion_sql1 +"> Script </a> Consulta SIJ ASA ASE en SQL </h4>";
                html += "<h4>enlace del <a href="+ elevacion_sql2 +"> Script </a> Consulta SIJ SUPREMA en SQL </h4>";
                html += "</body>";    
            email.replyAll("incapable of HTML", {
                                                  htmlBody: html,
                                                  attachments:[elevaciones1,elevaciones2],
                                                });
            email.markRead();
       }
  }
}