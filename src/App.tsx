/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Target, 
  PenTool, 
  Layout, 
  Search, 
  TrendingUp, 
  RefreshCw,
  Quote,
  ArrowRight,
  Lock,
  Zap,
  Award,
  Users,
  MessageSquare,
  Globe,
  FileText
} from "lucide-react";

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const ChapterCard = ({ number, title, description, details, expandedContent }: { number: string; title: string; description: string; details: string[]; expandedContent: string }) => (
  <div className="border-l-2 border-brand-deep/10 pl-10 py-10 mb-20 last:mb-0">
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-deep/40 mb-4 block">Capítulo {number}</span>
    <h3 className="text-2xl md:text-4xl font-serif mb-6 text-brand-navy leading-tight tracking-tight">{title}</h3>
    <p className="text-brand-slate leading-relaxed mb-8 text-lg md:text-xl max-w-2xl font-light">{description}</p>
    
    <div className="prose prose-slate max-w-2xl mb-12 text-brand-slate/90 leading-relaxed text-lg font-light">
      <p>{expandedContent}</p>
    </div>

    <ul className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl">
      {details.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-sm md:text-base text-brand-slate/80 bg-brand-sage/30 p-6 rounded-2xl border border-brand-deep/5">
          <Check className="w-5 h-5 text-brand-deep mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-deep/10">
      {/* Barra de Navegación Minimalista */}
      <nav className="fixed top-0 w-full bg-[#fcfcf9]/80 backdrop-blur-md z-50 border-b border-brand-deep/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-lg text-brand-deep">Francisco · 2026</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#metodo" className="text-xs uppercase tracking-widest font-medium text-brand-slate hover:text-brand-deep transition-colors">El Método</a>
            <a href="#autor" className="text-xs uppercase tracking-widest font-medium text-brand-slate hover:text-brand-deep transition-colors">El Autor</a>
            <a href="#preguntas" className="text-xs uppercase tracking-widest font-medium text-brand-slate hover:text-brand-deep transition-colors">Dudas</a>
          </div>
          <a 
            href="#precio-final" 
            className="text-xs uppercase tracking-widest font-semibold text-brand-deep hover:text-brand-navy transition-colors border border-brand-deep/20 px-4 py-2 rounded-full"
          >
            Adquirir Sistema
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-32 px-6 bg-gradient-to-b from-brand-sage/40 to-transparent overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-32"
        >
          <div className="flex-1 text-center lg:text-left">
            <span className="font-mono text-xs uppercase tracking-[0.5em] text-brand-deep mb-12 block opacity-70">Manual de Campo para Expertos</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-navy leading-[0.95] mb-12 text-balance tracking-tighter">
              Cómo Crear Libros Digitales de no ficción en tiempo récord
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-brand-slate mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
              Un sistema de ingeniería de producto aplicado al conocimiento para transformar tu saber en un activo rentable y duradero.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12">
              <a 
                href="#precio-final" 
                className="bg-brand-deep text-white px-14 py-7 rounded-full font-medium text-xl hover:bg-brand-navy transition-all shadow-2xl shadow-brand-deep/30 flex items-center gap-4 group"
              >
                Obtener el sistema por $9,99
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-l-0 sm:border-l border-brand-deep/10 sm:pl-12">
                <span className="text-lg text-brand-navy font-bold">Acceso inmediato</span>
                <span className="text-xs text-brand-slate/60 uppercase tracking-[0.2em]">Garantía total de 30 días</span>
              </div>
            </div>
          </div>

          <div className="flex-none w-full max-w-lg relative">
            <div className="absolute -inset-24 bg-brand-deep/5 rounded-full blur-[120px]" />
            <img 
              src="https://i.ibb.co/gFMynVyC/como-crear-ebooks-de-no-ficcion-en-poco-tiempo.png" 
              alt="Portada del Libro" 
              className="relative w-full h-auto rounded-[2.5rem] shadow-[0_60px_120px_-20px_rgba(6,78,59,0.3)] transform hover:-rotate-1 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </header>

      {/* Manifiesto: El Problema del Experto */}
      <Section className="border-t border-brand-deep/5">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1] text-brand-navy mb-12 tracking-tighter">
              La paradoja del conocimiento silencioso.
            </h2>
            <p className="text-brand-slate text-xl lg:text-2xl italic font-light opacity-80 leading-relaxed max-w-md">
              «El mayor desperdicio del mundo no es el dinero, sino el conocimiento que muere con quien lo posee.»
            </p>
          </div>
          <div className="lg:col-span-7 space-y-12 text-xl leading-relaxed text-brand-slate font-light">
            <p>
              ¿Cuántas veces has explicado lo mismo esta semana? ¿Cuántos correos has redactado resolviendo dudas que ya habías resuelto antes? Tienes un conocimiento sólido, forjado en años de práctica real. Podrías estar ayudando a cientos de personas —y de paso generando ingresos pasivos— pero hay un obstáculo invisible: escribir un libro siempre te ha parecido una tarea titánica.
            </p>
            <p>
              Algo que requiere meses de reclusión, una inspiración divina que nunca llega o un talento literario especial que crees no poseer. Te entiendo perfectamente. No eres escritor profesional. Eres consultor, emprendedor, abogado, cocinero, experto en tu oficio. Tu valor no está en la sintaxis perfecta, sino en la solución que ofreces.
            </p>
            <div className="font-serif italic text-brand-navy text-2xl lg:text-4xl border-l-4 border-brand-deep pl-12 py-10 bg-brand-sage/30 rounded-r-[3rem]">
              "Hasta ahora, cada vez que te has sentado frente a la pantalla, has chocado con la misma pared: la página en blanco, la falta de un método claro y la sensación de que avanzas a ciegas en un laberinto sin salida."
            </div>
            <p>
              La mayoría de los expertos mueren con su conocimiento guardado en carpetas de archivos o, peor aún, solo en su cabeza. Regalan su tiempo en asesorías informales porque no tienen un formato que escale. Un libro digital no es solo un producto; es tu embajador ante el mundo, una herramienta que trabaja mientras duermes y que filtra a tus clientes ideales antes de que hablen contigo.
            </p>
            <p>
              Este no es un tratado sobre la belleza literaria. Es un manual de campo, un sistema de trabajo que transforma la escritura en un proceso predecible, ordenado y, sobre todo, rápido. Lo he probado durante años, lo han utilizado decenas de emprendedores y funciona porque no depende de la inspiración, sino de la estructura.
            </p>
            <p>
              El mercado actual no busca "literatura", busca "resultados". Busca a alguien que le diga: "He estado donde tú estás, he resuelto el problema y aquí tienes el mapa para que tú también lo hagas". Ese mapa es tu libro digital. Y mi misión es que dejes de ser un experto silencioso para convertirte en una autoridad visible.
            </p>
          </div>
        </div>
      </Section>

      {/* La Psicología del Lector de No Ficción */}
      <section className="bg-brand-navy text-white py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-[1] tracking-tighter">Por qué la gente compra libros de no ficción.</h2>
              <div className="space-y-10 text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl">
                <p>
                  Entender la psicología de tu lector es el primer paso para escribir un libro que se venda solo. El lector de no ficción no busca entretenimiento; busca una transformación. Busca pasar del punto A (donde tiene un problema) al punto B (donde el problema está resuelto).
                </p>
                <p>
                  Tu libro debe ser el puente entre esos dos puntos. Si logras que el lector sienta que entiendes su dolor mejor que él mismo, la venta está asegurada. En este sistema, desglosamos los disparadores psicológicos que hacen que una persona decida invertir su tiempo y dinero en tu conocimiento.
                </p>
                <p>
                  Hablamos de la autoridad, de la escasez de soluciones reales y de la necesidad humana de orden en un mundo de caos informativo. Tu libro no compite con otros libros; compite con la confusión del lector.
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-12 lg:p-20 rounded-[4rem] border border-white/10 backdrop-blur-sm">
              <ul className="space-y-16">
                <li className="flex gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-deep flex items-center justify-center shrink-0 shadow-lg shadow-brand-deep/20">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-4">La Promesa de Cambio</h4>
                    <p className="text-lg text-white/60 leading-relaxed">El lector compra la versión mejorada de sí mismo que tu libro promete entregarle al final de la lectura.</p>
                  </div>
                </li>
                <li className="flex gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-deep flex items-center justify-center shrink-0 shadow-lg shadow-brand-deep/20">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-4">La Búsqueda de Orden</h4>
                    <p className="text-lg text-white/60 leading-relaxed">En la era del exceso de información, el lector paga por la curación y la estructura que tú le proporcionas.</p>
                  </div>
                </li>
                <li className="flex gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-deep flex items-center justify-center shrink-0 shadow-lg shadow-brand-deep/20">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-4">Validación de Autoridad</h4>
                    <p className="text-lg text-white/60 leading-relaxed">El lector busca a alguien en quien confiar. Tu libro es la prueba definitiva de que sabes de lo que hablas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía: Por qué ahora */}
      <section className="bg-brand-sage/20 py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 text-brand-navy tracking-tighter">La Economía del Conocimiento en 2026</h2>
          <div className="space-y-16 text-xl text-brand-slate leading-relaxed font-light">
            <p className="text-center max-w-3xl mx-auto italic">
              Vivimos en una era donde la atención es el activo más escaso. Sin embargo, la paradoja es que nunca ha habido tanta demanda de soluciones concretas a problemas específicos. La gente no busca "aprender sobre finanzas", busca "cómo organizar mis impuestos siendo autónomo en España".
            </p>
            <div className="grid md:grid-cols-3 gap-12 pt-12">
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-deep text-white flex items-center justify-center mx-auto font-serif text-2xl font-bold">1</div>
                <h4 className="font-bold text-2xl text-brand-navy">Autoridad Instantánea</h4>
                <p className="text-base leading-relaxed">Ser autor de una obra de referencia te posiciona automáticamente por encima del 99% de tu competencia.</p>
              </div>
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-deep text-white flex items-center justify-center mx-auto font-serif text-2xl font-bold">2</div>
                <h4 className="font-bold text-2xl text-brand-navy">Ingresos Pasivos</h4>
                <p className="text-base leading-relaxed">Cada venta de tu libro es un ingreso que no requiere que estés presente. Es la base de tu libertad financiera.</p>
              </div>
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-deep text-white flex items-center justify-center mx-auto font-serif text-2xl font-bold">3</div>
                <h4 className="font-bold text-2xl text-brand-navy">Filtro de Clientes</h4>
                <p className="text-base leading-relaxed">Quien lee tu libro ya conoce tu metodología. El proceso de venta de tus servicios termina antes de empezar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Método Detallado (Expandido) */}
      <Section id="metodo">
        <div className="text-center mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-deep mb-4 block">Arquitectura del Sistema</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-navy mb-8">Un viaje de sesenta días</h2>
          <p className="text-brand-slate max-w-3xl mx-auto text-xl font-light">
            No es una carrera de fondo, es una serie de etapas estratégicas diseñadas para que nunca te sientas perdido.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ChapterCard 
            number="01"
            title="Validación y Planificación Estratégica"
            description="El error más caro que cometen los autores primerizos es lanzarse a escribir sin validar si su idea tiene mercado real."
            expandedContent="En esta fase inicial, nos alejamos del teclado para sumergirnos en el mercado. Aprenderás a usar el 'Test del Dolor Real', una metodología que utiliza datos públicos de Amazon, foros especializados y tendencias de búsqueda para confirmar que hay personas dispuestas a pagar por tu solución. No escribimos para nosotros, escribimos para resolver una frustración ajena. Definiremos tu avatar de lector con una precisión casi obsesiva, entendiendo no solo lo que quiere, sino lo que le quita el sueño a las tres de la mañana. Analizaremos a tu competencia no para copiarla, sino para encontrar el 'Hueco de Autoridad': ese espacio que nadie está cubriendo y donde tú puedes reinar. Estableceremos objetivos claros: ¿quieres vender miles de copias a bajo precio o usar el libro como puerta de entrada a servicios de alto valor? Cada decisión aquí determinará el éxito de los siguientes sesenta días."
            details={[
              "Investigación de mercado en menos de 120 minutos.",
              "Identificación de los cinco dolores críticos de tu audiencia.",
              "Creación del perfil psicológico del comprador ideal.",
              "El cronograma de 60 días: metas diarias sin estrés.",
              "Definición del 'Hueco de Autoridad' en tu nicho."
            ]}
          />

          <ChapterCard 
            number="02"
            title="Investigación y Estructura Automatizada"
            description="La mayoría de la gente confunde investigar con acumular pestañas abiertas. Aprenderás a ser un francotirador de información."
            expandedContent="Aquí es donde el libro empieza a tomar forma sin haber redactado un solo párrafo. Te entrego la 'Técnica del Francotirador', un sistema para localizar exactamente las piezas de información que faltan en tu rompecabezas. Olvida las semanas de lectura improductiva. Construiremos el 'Esqueleto de Carne y Hueso', un índice tan detallado que, cuando llegue el momento de escribir, solo tendrás que rellenar los huecos. Este esquema avanzado representa el 40% del trabajo total del libro. Aprenderás a organizar tus ideas de forma lógica y progresiva, asegurando que el lector nunca se sienta perdido o abrumado. Utilizaremos mapas mentales estratégicos para conectar conceptos y crear una narrativa que fluya de manera natural, guiando al lector desde su problema actual hasta la solución que tú propones."
            details={[
              "Uso de operadores de búsqueda avanzada para filtrar el ruido.",
              "La regla del cinco–tres–uno para la curación de contenidos.",
              "Plantilla de estructura de capítulos de alta conversión.",
              "Cómo redactar subtítulos que generen curiosidad inmediata.",
              "Mapas mentales para la conexión lógica de ideas."
            ]}
          />

          <ChapterCard 
            number="03"
            title="Redacción de Alto Impacto sin Bloqueos"
            description="Llega el momento de redactar, y aquí es donde muchos se paralizan. El Método del Artesano es tu antídoto contra el miedo."
            expandedContent="Escribir no es una cuestión de talento, es una cuestión de estructura. Te enseñaré el 'Método del Artesano': sesiones de trabajo de 90 minutos diseñadas para maximizar tu estado de flujo. Aprenderás la 'Fórmula P–A–R' (Problema–Acción–Resultado), una estructura de cuatro líneas que garantiza que cada párrafo que escribas sea claro, útil y persuasivo. Además, dominaremos el arte de las analogías para que tus conceptos más técnicos se sientan tan sencillos como una conversación de café. Te mostraré cómo 'escribir hablando', una técnica para volcar tus ideas con rapidez y naturalidad, eliminando el juicio interno que suele frenar la creatividad. El objetivo es producir un borrador sólido en tiempo récord, priorizando la claridad del mensaje sobre la perfección gramatical en esta primera etapa."
            details={[
              "Técnicas para entrar en estado de flujo creativo en 5 minutos.",
              "La Fórmula P–A–R aplicada a la no ficción profesional.",
              "Uso de analogías domésticas para explicar procesos complejos.",
              "Cómo mantener un tono profesional pero cercano y humano.",
              "Técnica de 'dictado estratégico' para acelerar la producción."
            ]}
          />

          <ChapterCard 
            number="04"
            title="Diseño Interior y Experiencia de Lectura"
            description="Un libro digital se juzga por su aspecto antes que por su contenido. Aprenderás el Diseño de Respiración."
            expandedContent="Si tu texto es una masa gris de letras, el lector se sentirá abrumado y abandonará. El 'Diseño de Respiración' utiliza márgenes generosos, tipografías editoriales y una jerarquía visual clara para que la lectura sea un placer, no un esfuerzo. Te mostraré cómo crear diagramas y tablas profesionales usando herramientas gratuitas, elevando el valor percibido de tu obra. También abordamos la parte técnica: cómo exportar a formatos universales asegurando que tu libro se vea perfecto en un Kindle, una tableta o un teléfono móvil. Entenderás la importancia del espacio en blanco y cómo usarlo para enfatizar ideas clave. Un diseño profesional no solo hace que el libro sea más bonito, sino que refuerza tu autoridad y hace que el contenido sea mucho más fácil de consumir y recordar."
            details={[
              "Principios de tipografía editorial para pantallas.",
              "Creación de gráficos y tablas de alto valor visual.",
              "Exportación técnica a EPUB, PDF y formatos móviles.",
              "Protocolo de pruebas en múltiples dispositivos.",
              "Uso estratégico del color y el espacio en blanco."
            ]}
          />

          <ChapterCard 
            number="05"
            title="Edición Estratégica y Control de Calidad"
            description="Un primer borrador siempre es imperfecto. La clave está en la revisión sistemática que separa a los aficionados de los expertos."
            expandedContent="La edición no es solo corregir comas; es asegurar que tu mensaje llega con fuerza. Organizamos la revisión en tres fases críticas. Primero, la autocorrección con técnicas de desapego psicológico: aprenderás a leer tu propio trabajo como si fuera de un extraño. Segundo, la gestión de 'lectores de prueba' (beta readers) mediante un cuestionario de siete preguntas que te dirá exactamente dónde pierdes el interés del lector o dónde las explicaciones son confusas. Por último, la corrección de credibilidad, donde verificamos cada dato y eliminamos las palabras que debilitan tu autoridad. Tu libro saldrá al mundo blindado contra críticas, con una pulcritud que invitará a la recomendación boca a boca. Te enseñaré a identificar los 'puntos de fricción' que hacen que un lector cierre el libro y cómo transformarlos en momentos de revelación."
            details={[
              "Técnicas de lectura en voz alta y cambio de medio.",
              "Cuestionario estratégico para lectores de prueba.",
              "Eliminación de palabras debilitadoras y muletillas.",
              "Cuándo y cómo delegar la corrección profesional.",
              "Auditoría de credibilidad y verificación de fuentes."
            ]}
          />

          <ChapterCard 
            number="06"
            title="Estrategia de Lanzamiento y Precios"
            description="Tienes el libro listo. Ahora toca que el mundo lo encuentre y entienda su valor. Aprenderás la Estructura A–P–C."
            expandedContent="El precio de tu libro no depende del número de páginas, sino del tamaño del problema que resuelves. Te enseñaré a fijar precios estratégicos que maximicen tanto tus ingresos como tu alcance, diferenciando entre el precio de lanzamiento y el precio de mantenimiento. Prepararemos los metadatos (título, subtítulo, palabras clave) para que los algoritmos de búsqueda trabajen a tu favor desde el primer minuto. Además, construiremos tu página de ventas siguiendo la 'Estructura A–P–C' (Atraer–Presentar–Cerrar), un modelo persuasivo que vende sin necesidad de sonar como un vendedor de feria. Hablaremos de la psicología del descuento, de los paquetes de valor y de cómo usar tu libro como el primer paso de una escalera de valor mucho más lucrativa."
            details={[
              "Psicología de precios para productos de conocimiento.",
              "Optimización de metadatos para buscadores globales.",
              "Redacción persuasiva para la página de ventas.",
              "Configuración de plataformas de pago y distribución.",
              "Diseño de la 'Escalera de Valor' post-lectura."
            ]}
          />

          <ChapterCard 
            number="07"
            title="Promoción y Construcción de Audiencia"
            description="Incluso si hoy no tienes ni un seguidor, puedes construir una base de lectores leales. El Embudo de Confianza."
            expandedContent="El marketing no es gritar en redes sociales; es construir relaciones a escala. Te mostraré el 'Embudo de Confianza de 90 días', un plan para generar autoridad antes incluso de que el libro esté a la venta. Aprenderás a crear un 'imán de prospectos' que atraiga a las personas adecuadas y a gestionar una lista de correo que espere con ansias tu lanzamiento. Incluyo una secuencia de cinco correos electrónicos de bienvenida que automatizan la construcción de tu autoridad mientras tú te enfocas en otras tareas. Veremos cómo usar las redes sociales no como un fin, sino como un canal para llevar tráfico a tu propia plataforma, donde tú tienes el control total de la relación con tu lector. Aprenderás a generar 'ruido estratégico' que despierte la curiosidad sin agotar a tu audiencia."
            details={[
              "El plan de 90 días para generar autoridad desde cero.",
              "Creación de contenidos educativos que atraen compradores.",
              "Secuencia de correos automatizada de alta conversión.",
              "Estrategias de colaboración con otros creadores de nicho.",
              "Gestión de la 'Lista de Espera' para lanzamientos exitosos."
            ]}
          />

          <ChapterCard 
            number="08"
            title="Mantenimiento y Evolución del Activo"
            description="Un libro digital es un activo vivo. Aprenderás a mantenerlo actualizado para que siga generando ingresos durante años."
            expandedContent="La mayoría de los autores publican y se olvidan. Los profesionales saben que un libro digital requiere un mantenimiento mínimo para seguir siendo relevante y rentable. Estableceremos un sistema por capas: revisiones rápidas mensuales para corregir errores menores, actualizaciones de herramientas trimestrales para asegurar que tus recomendaciones siguen vigentes, y una evaluación estructural anual para decidir si es necesaria una nueva edición. Esto no solo mantiene la calidad, sino que te permite lanzar segundas ediciones que generen picos de ventas recurrentes y mantengan tu autoridad intacta. Veremos cómo recolectar testimonios de forma automática para que tu prueba social crezca con cada venta, y cómo usar el feedback de los lectores para mejorar no solo el libro, sino todos tus productos futuros."
            details={[
              "Protocolo de revisión mensual de 30 minutos.",
              "Actualización estratégica de ejemplos y herramientas.",
              "Gestión de comentarios para la mejora continua.",
              "Cómo convertir una segunda edición en un evento de ventas.",
              "Automatización de la recolección de testimonios reales."
            ]}
          />
        </div>
      </Section>

      {/* El Ecosistema del Conocimiento */}
      <Section className="bg-white border-t border-brand-deep/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-navy mb-24 text-center tracking-tighter">El Ecosistema del Conocimiento</h2>
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
            <div className="space-y-12 text-xl leading-relaxed text-brand-slate font-light max-w-xl">
              <p>
                Un libro digital no es el final del camino; es el centro de un ecosistema mucho más amplio. Una vez que has estructurado tu saber en un formato consumible, las posibilidades de expansión son infinitas. 
              </p>
              <p>
                Tu libro puede convertirse en la base de un curso en línea, en el guion de una serie de talleres presenciales o en la metodología que sustenta tu consultoría de alto nivel. Al tener el 'activo madre' (el libro), crear productos derivados es una tarea sencilla y coherente.
              </p>
              <p>
                En este sistema, te damos las claves para que tu libro no sea una isla, sino el puerto desde el cual zarpan todos tus futuros proyectos. Aprenderás a identificar las 'unidades de valor' dentro de tu obra que pueden ser empaquetadas y vendidas de forma independiente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="p-10 bg-brand-sage/40 rounded-[3rem] border border-brand-deep/5 hover:bg-brand-sage/60 transition-all hover:-translate-y-2">
                <Users className="w-12 h-12 text-brand-deep mb-8" />
                <h4 className="font-bold text-2xl text-brand-navy mb-4">Comunidad</h4>
                <p className="text-base text-brand-slate/70 leading-relaxed">Transforma a tus lectores en una comunidad vibrante de aprendizaje.</p>
              </div>
              <div className="p-10 bg-brand-sage/40 rounded-[3rem] border border-brand-deep/5 hover:bg-brand-sage/60 transition-all hover:-translate-y-2">
                <TrendingUp className="w-12 h-12 text-brand-deep mb-8" />
                <h4 className="font-bold text-2xl text-brand-navy mb-4">Escalabilidad</h4>
                <p className="text-base text-brand-slate/70 leading-relaxed">Crea productos de diferentes niveles de precio basados en el mismo contenido.</p>
              </div>
              <div className="p-10 bg-brand-sage/40 rounded-[3rem] border border-brand-deep/5 hover:bg-brand-sage/60 transition-all hover:-translate-y-2">
                <Award className="w-12 h-12 text-brand-deep mb-8" />
                <h4 className="font-bold text-2xl text-brand-navy mb-4">Prestigio</h4>
                <p className="text-base text-brand-slate/70 leading-relaxed">Usa tu libro para acceder a conferencias y eventos de alto nivel.</p>
              </div>
              <div className="p-10 bg-brand-sage/40 rounded-[3rem] border border-brand-deep/5 hover:bg-brand-sage/60 transition-all hover:-translate-y-2">
                <Globe className="w-12 h-12 text-brand-deep mb-8" />
                <h4 className="font-bold text-2xl text-brand-navy mb-4">Alcance</h4>
                <p className="text-base text-brand-slate/70 leading-relaxed">Llega a mercados internacionales sin costes de logística física.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* El Legado Digital */}
      <section className="bg-brand-navy text-white py-40 px-6 overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-16 leading-[0.95] tracking-tighter">Tu libro es tu legado en la red.</h2>
          <div className="grid md:grid-cols-2 gap-20 text-xl font-light leading-relaxed text-white/80 text-left max-w-5xl mx-auto">
            <p>
              En un mundo de contenidos efímeros, un libro digital es una declaración de permanencia. Es la diferencia entre ser un ruido pasajero en una red social y ser una referencia consultada una y otra vez. 
            </p>
            <p>
              Este sistema no solo te entrega un libro; te entrega la capacidad de replicar el proceso. Una vez que dominas la ingeniería de creación, puedes lanzar una serie de obras que cubran diferentes ángulos de tu especialidad.
            </p>
          </div>
          <div className="mt-24 flex justify-center">
            <div className="editorial-divider bg-white/30 w-40 h-0.5" />
          </div>
        </div>
      </section>

      {/* Testimonios Expandidos */}
      <section className="bg-brand-sage/30 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-8 tracking-tight">Resultados Reales</h2>
            <p className="text-brand-slate text-xl font-light max-w-2xl mx-auto">Personas que transformaron su saber en un activo digital siguiendo este método.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl shadow-brand-deep/5 border border-brand-deep/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-12 h-12 text-brand-deep/10 mb-8" />
                <p className="text-brand-slate leading-relaxed mb-10 italic text-lg">
                  «Seguí el plan de sesenta días y publiqué mi libro sobre jardinería ecológica. En el primer mes superé los $1.200 en ventas. El método es claro y directo, justo lo que necesitaba para dejar de procrastinar y empezar a producir.»
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-brand-deep/5 pt-8">
                <div className="w-14 h-14 rounded-full bg-brand-deep/10 flex items-center justify-center font-serif text-brand-deep font-bold text-xl">JA</div>
                <div>
                  <p className="font-bold text-brand-navy text-lg">Jorge Alfaro</p>
                  <p className="text-xs text-brand-slate/60 uppercase tracking-[0.2em]">Paisajista</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl shadow-brand-deep/5 border border-brand-deep/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-12 h-12 text-brand-deep/10 mb-8" />
                <p className="text-brand-slate leading-relaxed mb-10 italic text-lg">
                  «Vengo del mundo corporativo y siempre escribí informes, pero un libro era otro nivel. La Fórmula P–A–R me ordenó la cabeza. El capítulo de precios me ayudó a fijar $14,99 sin complejos. Lo recomiendo a todos mis colegas consultores que quieran monetizar su saber.»
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-brand-deep/5 pt-8">
                <div className="w-14 h-14 rounded-full bg-brand-deep/10 flex items-center justify-center font-serif text-brand-deep font-bold text-xl">PL</div>
                <div>
                  <p className="font-bold text-brand-navy text-lg">Patricia Luque</p>
                  <p className="text-xs text-brand-slate/60 uppercase tracking-[0.2em]">Consultora RRHH</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl shadow-brand-deep/5 border border-brand-deep/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-12 h-12 text-brand-deep/10 mb-8" />
                <p className="text-brand-slate leading-relaxed mb-10 italic text-lg">
                  «Como abogado, mi tiempo es mi producto. Estaba agotado de vender horas. Con este método pude empaquetar mis conocimientos sobre derecho digital en una guía práctica. Ahora recibo ventas automáticas cada semana y mis clientes llegan mucho más informados.»
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-brand-deep/5 pt-8">
                <div className="w-14 h-14 rounded-full bg-brand-deep/10 flex items-center justify-center font-serif text-brand-deep font-bold text-xl">RM</div>
                <div>
                  <p className="font-bold text-brand-navy text-lg">Ricardo Maza</p>
                  <p className="text-xs text-brand-slate/60 uppercase tracking-[0.2em]">Abogado Digital</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes (Expandido) */}
      <Section id="preguntas">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 text-brand-navy tracking-tight">Respuestas a tus dudas</h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-brand-deep" />
                «No tengo tiempo para escribir un libro.»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                Precisamente por eso este método es para ti. No te pedimos que dejes tu trabajo o que te encierres un mes. El sistema está diseñado para integrarse en una agenda ocupada. Con sesiones de noventa minutos, tres veces por semana, en sesenta días tendrás tu libro terminado. Se trata de eficiencia, no de volumen de horas. Además, te enseñamos a usar bloques de tiempo marginales que ahora mismo estás desperdiciando sin darte cuenta.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <Globe className="w-6 h-6 text-brand-deep" />
                «No sé nada de promoción digital.»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                El capítulo siete es una guía completa de mercadotecnia para no expertos. Te enseñamos a construir una audiencia desde cero absoluto, sin necesidad de presupuestos publicitarios ni de ser un experto en algoritmos. Es un enfoque humano y basado en la utilidad. Te damos las plantillas exactas para tus publicaciones y correos, para que solo tengas que adaptar tu mensaje y enviarlo.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <Target className="w-6 h-6 text-brand-deep" />
                «¿Y si mi tema es muy técnico o aburrido?»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                No existen temas aburridos, solo temas mal explicados. Si tu conocimiento resuelve un problema real, alguien lo necesita. Usaremos técnicas de analogías y casos prácticos para que cualquier disciplina, por técnica que sea, resulte apasionante para quien busca la solución. Aprenderás a estructurar la información de manera que el lector sienta 'pequeñas victorias' en cada capítulo, manteniéndolo motivado hasta el final.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-deep" />
                «¿Puedo escribir ficción con esto?»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                Siendo honestos: no. Este sistema es puramente para libros de no ficción profesional (guías, manuales, libros de negocios, desarrollo personal). La estructura de una novela requiere un enfoque artístico y narrativo que no cubrimos aquí. Nos enfocamos en la transferencia de conocimiento práctica y en la resolución de problemas específicos.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <Zap className="w-6 h-6 text-brand-deep" />
                «¿Necesito ser un experto reconocido?»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                El libro es lo que te convierte en un experto reconocido. No necesitas el permiso de nadie para publicar. Si tienes un método que funciona y has ayudado a personas en el pasado, tienes todo lo necesario para empezar. Tu libro será tu credencial más poderosa, abriéndote puertas que antes estaban cerradas y dándote una autoridad que el currículum tradicional ya no puede proporcionar.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <FileText className="w-6 h-6 text-brand-deep" />
                «¿Qué pasa si ya empecé y me bloqueé?»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                Este sistema es perfecto para rescatar proyectos abandonados. Te ayudará a auditar lo que ya tienes, descartar lo innecesario y darle una estructura sólida para terminarlo de una vez por todas. Muchas veces el bloqueo viene de una mala planificación inicial; nosotros reajustamos los cimientos para que la construcción pueda continuar sin tropiezos.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-brand-deep" />
                «¿Necesito contratar a un diseñador?»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                No es estrictamente necesario. En el capítulo cuatro te enseñamos a usar herramientas gratuitas y plantillas profesionales que te permitirán obtener un resultado de alta calidad por tu cuenta. Sin embargo, también te explicamos cuándo y cómo contratar a un profesional si decides delegar esa parte, asegurándote de que el resultado final sea impecable.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-bold text-brand-navy text-xl flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-brand-deep" />
                «¿Cuánto dinero puedo ganar realmente?»
              </h4>
              <p className="text-brand-slate leading-relaxed text-base font-light">
                Depende de tu nicho y de tu esfuerzo en la promoción, pero el libro es solo la punta del iceberg. Muchos de nuestros alumnos usan el libro para atraer clientes de consultoría que pagan diez o veinte veces el precio del libro. El potencial de ingresos directos es real, pero el valor indirecto en autoridad y nuevos negocios suele ser mucho mayor.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Oferta Final (Expandida) */}
      <section id="comprar" className="py-40 px-6 bg-brand-deep text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-white rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-brand-navy rounded-full blur-[200px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif mb-12 leading-[0.9] tracking-tighter">Tu conocimiento merece ser compartido.</h2>
          <p className="text-2xl md:text-4xl text-white/80 mb-24 max-w-5xl mx-auto font-light leading-relaxed">
            No permitas que tu experiencia se pierda en el olvido. Crea hoy mismo el activo que definirá tu carrera profesional.
          </p>
          
          <div id="precio-final" className="scroll-mt-24 bg-white text-brand-navy p-12 md:p-24 rounded-[5rem] shadow-3xl inline-block w-full max-w-3xl border border-white/20">
            <span className="text-8xl md:text-[10rem] font-serif font-bold block mb-8 tracking-tighter leading-none">$9,99</span>
            <span className="text-base md:text-lg uppercase tracking-[0.5em] text-brand-slate/60 block mb-20 font-bold">Pago único · Acceso de por vida</span>
            
            <div className="grid sm:grid-cols-2 gap-10 mb-20 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-5 text-lg md:text-xl">
                <Check className="w-7 h-7 text-brand-deep shrink-0" />
                <span>Sistema completo</span>
              </div>
              <div className="flex items-center gap-5 text-lg md:text-xl">
                <Check className="w-7 h-7 text-brand-deep shrink-0" />
                <span>Plan de 60 días</span>
              </div>
              <div className="flex items-center gap-5 text-lg md:text-xl">
                <Check className="w-7 h-7 text-brand-deep shrink-0" />
                <span>Plantillas avanzadas</span>
              </div>
              <div className="flex items-center gap-5 text-lg md:text-xl">
                <Check className="w-7 h-7 text-brand-deep shrink-0" />
                <span>Guía de herramientas</span>
              </div>
              <div className="flex items-center gap-5 text-lg md:text-xl">
                <Check className="w-7 h-7 text-brand-deep shrink-0" />
                <span>Checklists finales</span>
              </div>
              <div className="flex items-center gap-5 text-lg md:text-xl">
                <ShieldCheck className="w-7 h-7 text-brand-deep shrink-0" />
                <span>Garantía 30 días</span>
              </div>
            </div>

            <button className="w-full bg-brand-deep text-white py-10 rounded-[2.5rem] font-bold text-2xl md:text-4xl hover:bg-brand-navy transition-all flex items-center justify-center gap-8 group shadow-2xl shadow-brand-deep/30">
              Adquirir el Sistema
              <ChevronRight className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
            </button>
            <p className="mt-12 text-sm md:text-base text-brand-slate/40 uppercase tracking-[0.4em] font-medium">Descarga inmediata tras el pago seguro</p>
          </div>

          <div className="mt-32 border-t border-white/10 pt-24 grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-white/40" />
              </div>
              <div className="text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-sm mb-3">Garantía de 30 Días</p>
                <p className="text-base text-white/60 leading-relaxed">Si no ves claro tu libro en un mes, te devolvemos cada dólar.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                <Lock className="w-10 h-10 text-white/40" />
              </div>
              <div className="text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-sm mb-3">Seguridad Total</p>
                <p className="text-base text-white/60 leading-relaxed">Procesamiento de pagos con estándares internacionales de seguridad.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                <RefreshCw className="w-10 h-10 text-white/40" />
              </div>
              <div className="text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-sm mb-3">Actualizaciones</p>
                <p className="text-base text-white/60 leading-relaxed">Acceso gratuito a todas las futuras revisiones del sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre el Autor (Expandido) */}
      <Section id="autor" className="bg-[#fcfcf9]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-none w-full lg:w-1/3 max-w-sm">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-deep/5 rounded-[3rem] -rotate-3" />
              <img 
                src="https://picsum.photos/seed/author/800/1000" 
                alt="Francisco González" 
                className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-deep mb-2 block opacity-60">La mente tras el método</span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-navy tracking-tight">Francisco González</h2>
            </div>
            <div className="space-y-8 text-brand-slate text-xl leading-relaxed font-light">
              <p>
                No soy un gurú de la mercadotecnia con treinta años de experiencia en agencias internacionales. Llegué a este mundo por accidente, empujado por la curiosidad y la necesidad de escalar mi propio conocimiento. He leído cientos de libros, probado decenas de herramientas y, sobre todo, cometido cientos de errores.
              </p>
              <p>
                De cada error extraje una lección, y de cada lección nació una parte de este método. He ayudado a empresas emergentes a encontrar su voz y a emprendedores solitarios a construir audiencias leales. Pero mi mayor orgullo es haber visto cómo el contenido, cuando se crea con intención y estrategia, transforma vidas.
              </p>
              <p className="font-serif italic text-2xl text-brand-navy">
                Este libro es mi regalo para ti, la herramienta que me hubiera gustado tener cuando empecé. Ahora, te toca a ti construir tu legado digital.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-brand-deep/5 text-center bg-brand-sage/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-brand-slate/60 tracking-wide leading-relaxed mb-6">
            © Francisco González· Todos los derechos reservados. <br/> Este libro ofrece información general basada en la experiencia del autor. Los resultados pueden variar según la dedicación y circunstancias de cada lector.
          </p>
          <p className="text-xs font-bold text-brand-deep tracking-widest">
            ⚡ Edición 2026 · Cómo Crear Ebooks
          </p>
        </div>
      </footer>
    </div>
  );
}
