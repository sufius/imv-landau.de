import React from "react";
import Typography from "@material-ui/core/Typography";

const link = (
  <a
    style={{ textDecoration: "none", color: "#21CBF3" }}
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.playmobox.com/de"
  >
    playmobox.com
  </a>
);

const Imprint = () => (
  <React.Fragment>
    <Typography variant="title" paragraph gutterBottom>
      Impressum
    </Typography>
    <Typography variant="caption" paragraph gutterBottom>
      Angaben gemäß § 5 TMG
    </Typography>
    <Typography paragraph>
      <strong>Anschrift</strong>
      <br />
      Islamischer multikultureller Verein Landau e.V (IMV Landau e.V.)
      <br />
      Danziger Platz 14
      <br />
      76829 Landau in der Pfalz
    </Typography>
    <Typography paragraph>
      <strong>Telefon</strong>
      <br />
      +49 6341 5575698
    </Typography>
    <Typography paragraph>
      <strong>E-Mail</strong>
      <br />
      imv-landau@web.de
    </Typography>
    <Typography variant="subheading">Haftung</Typography>
    <Typography variant="caption" paragraph>
      Der Islamischer multikultureller Verein Landau e.V. bemüht sich auf dieser
      Webseite richtige und vollständige Informationen zur Verfügung zu stellen,
      übernimmt jedoch keine Haftung oder Garantie für die Aktualität,
      Richtigkeit und Vollständigkeit der auf dieser Webseite bereitgestellten
      Informationen. Dies gilt auch für alle Verbindungen (‚Links‘), auf die
      diese Webseite direkt oder indirekt verweist. Der Verein ist für den
      Inhalt einer Seite, die mit einem solchen Link erreicht wird, nicht
      verantwortlich. Die Redaktion übernimmt keine Haftung für unverlangt
      eingesandte Manuskripte, Fotos, Illustrationen. Namentlich gekennzeichnete
      Beiträge geben nicht unbedingt die Meinung der Redaktion wieder. Das
      Copyright sowie die Verantwortung für die publizierten Inhalte liegen
      ausschließlich bei den jeweiligen Autoren. Die Nennung von Firmen- oder
      Markennamen erfolgt ohne Prüfung etwaiger Rechte Dritter. Aus einem
      fehlenden Markenschutz- oder Copyright-Hinweis kann insbesondere nicht der
      Schluss gezogen werden, diese Namen und/oder Bezeichnungen seinen frei von
      Rechten Dritter. Für Einträge, die im Forum und im Gästebuch dieses
      Projektes vorgenommen werden, übernehmen die Betreiber dieser Seite
      grundsätzlich keine Haftung. Der Inhalt dieser Webseite ist
      urheberrechtlich geschützt. Alle Rechte für den Inhalt und die Gestaltung
      stehen allein dem Verein zu.
    </Typography>
    <Typography variant="subheading">
      Gestaltung und technische Umsetzung
    </Typography>
    <Typography variant="caption" paragraph>
      Die grafische Gestaltung und technische Umsetzung dieser Webseite wurde
      mit Hilfe von {link} realisiert. Für den Inhalt bleibt der Herausgeber
      dieser Webseite verantwortlich. Bei technischen Problemen nehmen Sie bitte
      Kontakt mit dem Webmaster auf.
    </Typography>
  </React.Fragment>
);
export default Imprint;
