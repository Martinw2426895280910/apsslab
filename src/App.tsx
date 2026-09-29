import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  FlaskConical,
  MessageCircle,
  Activity,
  Zap,
  HeartPulse,
  SunMedium
} from 'lucide-react';

export default function App() {
  const WHATSAPP_NUMBER = "5493772636749";
  const PHONE_DISPLAY = "3772-636749";
  const ADDRESS = "Sarmiento 902, Paso de los Libres, Corrientes, Argentina";

  const getWaLink = (msg: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased pb-28 md:pb-12 text-base sm:text-lg">
      
      {/* AVISO DE ATENCIÓN DIRECTA WHATSAPP CON DIRECCIÓN LOCAL */}
      <div className="bg-emerald-800 text-white py-2.5 px-4 text-center text-sm sm:text-base font-semibold">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse shrink-0"></span>
          <span>Paso de los Libres, Corrientes · Sarmiento 902 · WhatsApp: {PHONE_DISPLAY}</span>
        </div>
      </div>

      {/* NAVEGACIÓN SIMPLE CON TEXTOS GRANDES */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3.5 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <span className="block leading-none">Lab Schvarzstein</span>
              <span className="text-xs font-semibold text-emerald-700 tracking-normal">Paso de los Libres</span>
            </div>
          </a>

          <a 
            href={getWaLink("Hola, quisiera consultar por análisis en Laboratorio Schvarzstein de Paso de los Libres")}
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold rounded-2xl flex items-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-4xl mx-auto px-4 pt-8 sm:pt-12">
        
        {/* HERO: DIRECTO A LA ACCIÓN CON TEXTOS GRANDES */}
        <div className="text-center sm:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-900 text-sm font-bold rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Sarmiento 902 · Paso de los Libres, Corrientes
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Análisis clínicos y chequeos en Paso de los Libres
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
            Sacá tu turno, consultá precios o enviá tu orden médica directamente por WhatsApp al <strong className="text-slate-900 font-bold">{PHONE_DISPLAY}</strong>. También realizamos extracciones a domicilio en toda la ciudad.
          </p>

          {/* BOTÓN GIGANTE PRINCIPAL DE WHATSAPP */}
          <div className="pt-2">
            <a 
              href={getWaLink("Hola, tengo una orden médica y quisiera enviarla para presupuesto o indicaciones (Paso de los Libres)")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xl rounded-2xl shadow-lg shadow-emerald-600/30 transition-all active:scale-98"
            >
              <MessageCircle className="w-7 h-7 fill-current" />
              <span>Enviar Foto de Orden Médica</span>
            </a>
          </div>
        </div>

        {/* SECCIÓN: PERFILES DESTACADOS Y PROMOCIONES */}
        <section id="perfiles" className="mt-14 pt-8 border-t border-slate-200">
          
          <div className="mb-6">
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Promociones y Chequeos</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">Perfiles de Análisis Más Pedidos</h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">Tocá en cualquier perfil para pedir precio o turno por WhatsApp:</p>
          </div>

          <div className="space-y-4">
            
            {/* Perfil 1: Chequeo General Anual */}
            <div className="p-6 bg-white rounded-3xl border-2 border-emerald-200 hover:border-emerald-500 shadow-sm transition-all space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold rounded-lg mb-1">
                      Más elegido · Chequeo Anual
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Perfil Clínico Completo</h3>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl whitespace-nowrap">8 hs ayuno</span>
              </div>

              <p className="text-slate-600 text-base">
                <strong>Incluye:</strong> Hemograma completo, Glucemia, Colesterol Total, HDL, LDL, Triglicéridos, Hepatograma, Uremia, Creatinina y Orina completa.
              </p>

              <a 
                href={getWaLink("Hola, quisiera consultar por el Perfil Clínico Completo en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Consultar Este Perfil por WhatsApp</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Perfil 2: Perfil Tiroideo */}
            <div className="p-6 bg-white rounded-3xl border-2 border-purple-200 hover:border-purple-500 shadow-sm transition-all space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-purple-100 text-purple-800 text-xs sm:text-sm font-bold rounded-lg mb-1">
                      Hormonal & Metabolismo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Perfil Tiroideo & Energía</h3>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl whitespace-nowrap">8 hs ayuno</span>
              </div>

              <p className="text-slate-600 text-base">
                <strong>Incluye:</strong> TSH ultrasensible, T4 Libre, T3 y Anticuerpos Anti-TPO. Ideal para control de peso, fatiga, caída de cabello o medicación.
              </p>

              <a 
                href={getWaLink("Hola, quisiera consultar por el Perfil Tiroideo y Energía en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Consultar Perfil Tiroideo</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Perfil 3: Perfil Deportivo & Apto Físico */}
            <div className="p-6 bg-white rounded-3xl border-2 border-sky-200 hover:border-sky-500 shadow-sm transition-all space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold rounded-lg mb-1">
                      Apto Físico y Rendimiento
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Perfil Deportivo & Gimnasio</h3>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl whitespace-nowrap">8 hs ayuno</span>
              </div>

              <p className="text-slate-600 text-base">
                <strong>Incluye:</strong> Hemograma, Glucemia, Ionograma (Sodio/Potasio), CPK muscular, Magnesio, Ferremia, Ferritina y Hepatograma.
              </p>

              <a 
                href={getWaLink("Hola, quisiera consultar por el Perfil Deportivo en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Consultar Perfil Deportivo</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Perfil 4: Vitamina D y Defensas */}
            <div className="p-6 bg-white rounded-3xl border-2 border-amber-200 hover:border-amber-500 shadow-sm transition-all space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <SunMedium className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold rounded-lg mb-1">
                      Inmunidad y Huesos
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Perfil Inmunológico & Vitamina D</h3>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl whitespace-nowrap">8 hs ayuno</span>
              </div>

              <p className="text-slate-600 text-base">
                <strong>Incluye:</strong> Vitamina D (25-OH), Vitamina B12, Calcio iónico, Fósforo, Zinc y Ferritina sérica.
              </p>

              <a 
                href={getWaLink("Hola, quisiera consultar por el Perfil de Vitamina D en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Consultar Perfil Inmunológico</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </section>

        {/* EXTRACCIÓN A DOMICILIO EN PASO DE LOS LIBRES */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="bg-indigo-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-md">
            <span className="text-indigo-300 font-bold text-sm uppercase tracking-wider">Atención en tu casa</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Extracciones a Domicilio en Paso de los Libres</h2>
            <p className="text-indigo-100 text-base sm:text-lg">
              Un bioquímico de nuestro equipo va a tu domicilio en Paso de los Libres con materiales estériles y valija térmica de refrigeración. Ideal para adultos mayores, bebés o personas con dificultad para trasladarse.
            </p>

            <div className="pt-2">
              <a 
                href={getWaLink("Hola, quisiera solicitar un turno de extracción a domicilio en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-indigo-950 font-extrabold text-lg rounded-2xl shadow hover:bg-indigo-50 transition-colors"
              >
                Pedir Bioquímico a Domicilio por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* GUÍA RÁPIDA DE AYUNO */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Preparación previa</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">¿Cuántas horas de ayuno necesitás?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-200">
              <strong className="text-lg text-slate-900 block font-bold">8 Horas de Ayuno</strong>
              <p className="text-sm text-slate-600 mt-1">Glucemia, Hemograma, Hepatograma, Tiroides y la mayoría de los análisis comunes.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200">
              <strong className="text-lg text-slate-900 block font-bold">12 Horas de Ayuno</strong>
              <p className="text-sm text-slate-600 mt-1">Colesterol, Triglicéridos y Perfil Lipídico. Se permite beber un poco de agua.</p>
            </div>
          </div>
        </section>

        {/* OBRAS SOCIALES / PREPAGAS */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="text-center sm:text-left mb-6">
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Coberturas</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Obras Sociales, Prepagas y Particulares</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">Envianos una foto de tu carnet o credencial por WhatsApp para confirmar cobertura:</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">OSDE</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">Swiss Medical</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">IOSCOR</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">PAMI</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">Galeno</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">Medifé</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">Sancor Salud</div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 text-base sm:text-lg">Particulares</div>
          </div>
        </section>

        {/* SEDE, DIRECCIÓN EXACTA Y CONTACTO */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Ubicación y Atención</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">Laboratorio Schvarzstein</h2>
            </div>
            
            <div className="space-y-4 text-base sm:text-lg text-slate-700">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-lg font-bold">Dirección:</strong>
                  <span>Sarmiento 902</span><br />
                  <span className="text-slate-500 text-sm">Paso de los Libres, Corrientes, Argentina</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <Phone className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block text-lg font-bold">Teléfono & WhatsApp:</strong>
                  <a 
                    href={getWaLink("Hola, quisiera hacer una consulta al Laboratorio de Sarmiento 902")}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-700 font-extrabold text-xl hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <span className="block text-slate-500 text-sm mt-0.5">Atención directa y cotización de recetas</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <Clock className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-lg font-bold">Horarios de Extracción y Atención:</strong>
                  <span>Lunes a Viernes de 07:00 a 19:00 hs</span><br />
                  <span>Sábados de 07:30 a 12:30 hs</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={getWaLink("Hola, quisiera consultar para acercarme a Sarmiento 902, Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg text-center rounded-2xl flex items-center justify-center gap-2 shadow-sm"
              >
                Escribir a Sarmiento 902 por WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* BARRA FIJA INFERIOR PARA TELÉFONOS (WHATSAPP DIRECTO) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-50 md:hidden shadow-xl">
        <a 
          href={getWaLink("Hola, deseo consultar por un análisis en Laboratorio Schvarzstein (Sarmiento 902, Paso de los Libres)")}
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-center rounded-2xl text-lg flex items-center justify-center gap-2 shadow-md"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span>WhatsApp: {PHONE_DISPLAY}</span>
        </a>
      </div>

    </div>
  );
}
