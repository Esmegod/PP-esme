import "./styles/styles.css";
import foto from "./images/EsmeHam.jpeg";
import imgLlave from "./images/llave.png";
import imgCV from "./images/cv.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import gmail from "./images/gmail.png";
import linkedin from "./images/linkedin.png";
import libro from "./images/libro.jpg";
import estudio from "./images/estudio.jpg";
import kdrama from "./images/kdrama.jpg";
import viaje from "./images/viaje.jpg";


function App() {
  return (
    <div className="principal" >
        <div className="seccion">
          <div className="subseccion-izq">
            <div> <img src={foto} alt="Esme" className="foto"></img></div>
            <div> <h2 className="nombre">Esmeralda Godinez Montero</h2></div>
            <div className="iconos"> <a href="https://es.reactjs.org/docs/hello-world.html"> <img src={imgLlave} alt="llave"></img></a> <a href="https://es.reactjs.org/docs/hello-world.html"> <img src={imgCV} alt="cv"></img></a></div>
          </div>
          <div className="subseccion-der">
            <p>¡Hola! mi nombre es Esmeralda y este es el incio de mi página personal.<br></br>
              Soy estudiante de la Escuela Superior de Cómputo donde curso la carrera de Ingeniería en Sistemas Computacionales, tambien estudié
              la carrera técnica de Informática en el CECyT 13 "Ricardo Flores Magón". <br></br> <br></br>
              En esta página podrás descargar mi currículum y mi llave púbica que se encuentra de lado izquierdo, tambien conocerás mis intereses personales y mi información de contacto. 
              Al final de está página te pláticaré acerca de la criptografía y su impacto en el ámbito militar.  
            </p>
            <div className="redes-sociales">
              <a href="https://www.facebook.com/esmeralda.godinezmontero.9"><img src={facebook} alt="facebook"></img></a>
              <a href="https://www.instagram.com/esmejaj"><img src={instagram} alt="instagram"></img></a>
              <a href="https://twitter.com/esmegod19"><img src={twitter} alt="twitter"></img></a>
              <a href="mailto:esmegod19@gmail.com"><img src={gmail} alt="gmail"></img></a>
              <a href="https://www.linkedin.com/in/esmeralda-godinez-montero-4961b0205/"><img src={linkedin} alt="linkedin"></img></a>
            </div>
          </div>
        </div>
        <h1 className="nombre">Hobbies</h1>
        <div className="espacio"></div>
        <div className="seccion">
          <div className="hobby">
            <img src={libro} className="img-hobby"></img>
            <p>Leer libros</p>            
          </div>
          <div className="hobby">
            <img src={estudio} className="img-hobby"></img>
            <p>Estudiar</p>            
          </div>
          <div className="hobby">
            <img src={kdrama} className="img-hobby"></img>
            <p>Ver K-Dramas</p>            
          </div>
          <div className="hobby">
            <img src={viaje} className="img-hobby"></img>
            <p>Viajar</p>            
          </div>
        </div>
        <h1 className="nombre">Acerca de la criptografía</h1>
        <div className="espacio"></div>
        <div className="seccion">
          <div className="acerca-cripto">
            <p>
              La primera guerra mundial fue uno de los eventos en el que el criptoanálisis jugó un papel determinante en el curso de la historia, esto se ilustra en el desciframiento de un telegrama alemán que fue interceptado por los británicos en 1917. 
            </p>
            <p>
              Woodrow Wilson, ex presidente de los Estados Unidos de América, estaba convencido de que la guerra solo podría finalizar con una negociación entre países, por ello había mantenido una posición neutral durante los dos primeros años. En 1916,
              se nombró a Arthur Zimmermann como ministro de Asuntos Exteriores en Alemania quien no tenía ninguna intención de conseguir la paz, por el contrario, buscaba extender la agresión militar alemana. 
            </p>
            <p>
            Aunque en 1915 Alemania había prometido emplear estrategias para evitar ataques accidentales de sus submarinos a barcos civiles, Zimmermann se negó a cumplirlas pues pretendía emprender una guerra submarina sin restricción y con ello cortar
            las líneas de suministro británicas. Aquello provocaría inevitablemente el hundimiento de barcos civiles estadounidenses, por lo que Estados Unidos declararía la guerra a Alemania. 
            </p>
            <p>
            Zimmermann planeó proponer una alianza a México, persuadiría al presidente mexicano a invadir Estados Unidos desde el sur para reclamar los territorios de Texas, Nuevo México y Arizona. Alemania apoyaría económica y militarmente a México, 
            pero Zimmermann quería que México persuadiera a Japón a atacar Estados Unidos. El principal objetivo era crear problemas internos en Estados Unidos que imposibilitara enviar tropas a Europa, de esta manera Alemania ganaría la guerra en el
            mar y en Europa. 
            </p>
            <p>
            Zimmermann envió un telegrama al embajador alemán en Washington quien debía transmitirlo al embajador alemán en México. El telegrama contenía la propuesta de Zimmermann respecto a la alianza con México y la sugerencia de invitar a Japón a 
            participar en dicha alianza. El telegrama codificado fue enviado a través de Suecia en una ruta que tocaba Inglaterra por lo cual no tardó en caer en manos británicas. Descubrieron que se trataba de una codificación usada solo para 
            comunicaciones diplomáticas de alto nivel por lo que inmediatamente se propusieron a descifrarlo. Se dieron cuenta de los planes de Alemania contra Estados Unidos y con ello la posibilidad de que Estados Unidos se uniera a los aliados. 
            Pensaron que, si enviaban inmediatamente el texto descifrado, entonces el gobierno estadounidense tomaría acciones publicas inmediatamente por lo que Alemania comprendería que su método de codificación había sido adivinado. 
            </p>
            <p>
            Después de que Alemania comenzó su ataque naval sin restricción y de que E.U.A seguía en una posición neutral, se decidió informar acerca del telegrama de Zimmermann. Para evitar que Alemania sospechara que habían conseguido descifrar el mensaje, 
            se infiltró un agente británico en las oficinas de telégrafos de México para obtener el mensaje de Zimmerman, entonces este se entregó al embajador norteamericano en Inglaterra, también fue publicado en la prensa. Zimmermann aceptó ser el autor 
            del telegrama y el trabajo de los criptoanalistas británicos seguía en el anonimato. 
            </p>
            <p>
            El 2 de abril de 1917 el presidente de Estados Unidos habló ante el congreso donde consideró las acciones de Alemania como una declaración de guerra. La participación de Estados Unidos en la primera guerra mundial fue inevitable.
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
