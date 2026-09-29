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
  SunMedium,
  HeartHandshake,
  ShieldAlert,
  Flame,
  UserCheck
} from 'lucide-react';

import heroLabImg from './assets/images/hero_modern_lab_1790682107345.jpg';
import homeCareImg from './assets/images/bg_home_care_1790682124783.jpg';

export default function App() {
  const WHATSAPP_NUMBER = "5493772636749";
  const PHONE_DISPLAY = "3772-636749";

  const getWaLink = (msg: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const perfiles = [
    {
      id: "clinico",
      tag: "★ MÁS ELEGIDO",
      badgeColor: "bg-emerald-100 text-emerald-800",
      borderColor: "border-emerald-300 hover:border-emerald-600",
      titleColor: "text-emerald-950",
      subTitleColor: "text-emerald-700",
      btnGradient: "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500",
      glowColor: "bg-emerald-100/60",
      name: "Perfil Clínico Completo",
      sub: "Chequeo Anual de Rutina",
      ayuno: "8 hs ayuno",
      icon: <Activity className="w-6 h-6 text-emerald-700" />,
      desc: "Hemograma completo, Glucemia, Colesterol Total, HDL, LDL, Triglicéridos, Hepatograma, Uremia, Creatinina y Orina completa."
    },
    {
      id: "tiroideo",
      tag: "HORMONAL & METABOLISMO",
      badgeColor: "bg-purple-100 text-purple-800",
      borderColor: "border-purple-300 hover:border-purple-600",
      titleColor: "text-purple-950",
      subTitleColor: "text-purple-700",
      btnGradient: "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500",
      glowColor: "bg-purple-100/60",
      name: "Perfil Tiroideo & Energía",
      sub: "Control de Tiroides y Peso",
      ayuno: "8 hs ayuno",
      icon: <Zap className="w-6 h-6 text-purple-700" />,
      desc: "TSH ultrasensible, T4 Libre, T3 y Anticuerpos Anti-TPO. Ideal para fatiga, control de peso, caída de cabello o medicación."
    },
    {
      id: "deportivo",
      tag: "APTO FÍSICO & RENDIMIENTO",
      badgeColor: "bg-sky-100 text-sky-800",
      borderColor: "border-sky-300 hover:border-sky-600",
      titleColor: "text-sky-950",
      subTitleColor: "text-sky-700",
      btnGradient: "from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500",
      glowColor: "bg-sky-100/60",
      name: "Perfil Deportivo & Gym",
      sub: "Control Muscular y Electrolitos",
      ayuno: "8 hs ayuno",
      icon: <HeartPulse className="w-6 h-6 text-sky-700" />,
      desc: "Hemograma, Ionograma (Sodio/Potasio), CPK muscular, Magnesio, Ferremia, Ferritina sérica, Glucemia y Hepatograma."
    },
    {
      id: "vitamina_d",
      tag: "DEFENSAS & HUESOS",
      badgeColor: "bg-amber-100 text-amber-900",
      borderColor: "border-amber-300 hover:border-amber-600",
      titleColor: "text-amber-950",
      subTitleColor: "text-amber-800",
      btnGradient: "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500",
      glowColor: "bg-amber-100/60",
      name: "Perfil Vitamina D & Defensas",
      sub: "Inmunidad y Salud Ósea",
      ayuno: "8 hs ayuno",
      icon: <SunMedium className="w-6 h-6 text-amber-800" />,
      desc: "Vitamina D (25-OH), Vitamina B12, Calcio iónico, Fósforo, Zinc y Ferritina sérica."
    },
    {
      id: "cardiovascular",
      tag: "CORAZÓN & ARTERIAS",
      badgeColor: "bg-rose-100 text-rose-900",
      borderColor: "border-rose-300 hover:border-rose-600",
      titleColor: "text-rose-950",
      subTitleColor: "text-rose-700",
      btnGradient: "from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500",
      glowColor: "bg-rose-100/60",
      name: "Perfil Cardiovascular",
      sub: "Riesgo Arterial y Presión",
      ayuno: "12 hs ayuno",
      icon: <Flame className="w-6 h-6 text-rose-700" />,
      desc: "Perfil lipídico completo, Apolipoproteínas, Proteína C Reactiva Ultrasensible (PCR-us), Glucemia y Ácido Úrico."
    },
    {
      id: "hepatico",
      tag: "HÍGADO & DIGESTIVO",
      badgeColor: "bg-teal-100 text-teal-900",
      borderColor: "border-teal-300 hover:border-teal-600",
      titleColor: "text-teal-950",
      subTitleColor: "text-teal-700",
      btnGradient: "from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500",
      glowColor: "bg-teal-100/60",
      name: "Perfil Hepático y Digestivo",
      sub: "Control de Grasa y Medicación",
      ayuno: "8 hs ayuno",
      icon: <ShieldAlert className="w-6 h-6 text-teal-700" />,
      desc: "Hepatograma completo (GOT, GPT, FAL, Bilirrubinas Total y Directa), Gamma GT, Proteínas Totales y Albúmina."
    },
    {
      id: "prostata",
      tag: "HOMBRES +40",
      badgeColor: "bg-indigo-100 text-indigo-900",
      borderColor: "border-indigo-300 hover:border-indigo-600",
      titleColor: "text-indigo-950",
      subTitleColor: "text-indigo-700",
      btnGradient: "from-indigo-600 to-blue-700 hover:from-indigo-500 hover:to-blue-600",
      glowColor: "bg-indigo-100/60",
      name: "Perfil Próstata y Vitalidad",
      sub: "Chequeo Urológico Preventivo",
      ayuno: "4 hs ayuno",
      icon: <UserCheck className="w-6 h-6 text-indigo-700" />,
      desc: "PSA Total y PSA Libre, Testosterona Total, Glucemia, Ácido Úrico y Sedimento Urinario."
    },
    {
      id: "gineco",
      tag: "MUJER & FERTILIDAD",
      badgeColor: "bg-pink-100 text-pink-900",
      borderColor: "border-pink-300 hover:border-pink-600",
      titleColor: "text-pink-950",
      subTitleColor: "text-pink-700",
      btnGradient: "from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500",
      glowColor: "bg-pink-100/60",
      name: "Perfil Gineco-Hormonal",
      sub: "Ciclo, Menopausia y Control",
      ayuno: "8 hs ayuno",
      icon: <HeartHandshake className="w-6 h-6 text-pink-700" />,
      desc: "FSH, LH, Estradiol, Progesterona, Prolactina, Ferritina y Hemograma completo."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans antialiased pb-28 md:pb-12 text-base sm:text-lg">
      
      {/* AVISO DE ATENCIÓN DIRECTA WHATSAPP CON DIRECCIÓN LOCAL */}
      <div className="bg-emerald-800 text-white py-2.5 px-4 text-center text-sm sm:text-base font-semibold border-b border-emerald-700/50">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping shrink-0"></span>
          <span>Paso de los Libres, Corrientes · Sarmiento 902 · WhatsApp: <strong>{PHONE_DISPLAY}</strong></span>
        </div>
      </div>

      {/* NAVEGACIÓN SIMPLE CON TEXTOS GRANDES */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-4 py-3.5 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-600/20">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <span className="block leading-none">Lab Schvarzstein</span>
              <span className="text-xs font-semibold text-emerald-700 tracking-normal">Paso de los Libres</span>
            </div>
          </a>

          {/* Botón WhatsApp Header con efecto destello y hover */}
          <a 
            href={getWaLink("Hola, quisiera consultar por análisis en Laboratorio Schvarzstein de Paso de los Libres")}
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative overflow-hidden group px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-base font-extrabold rounded-2xl flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            {/* Destello blanco que recorre el botón */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION CON IMAGEN DE FONDO REAL Y GRADIENTE */}
      <header className="relative bg-slate-950 text-white py-14 sm:py-20 px-4 overflow-hidden border-b border-slate-800">
        {/* Imagen de laboratorio de fondo */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url(${heroLabImg})` }}
        ></div>

        {/* Gradientes y bokeh ambiental */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-5 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-bold rounded-full border border-emerald-400/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Sarmiento 902 · Paso de los Libres, Corrientes
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Análisis clínicos y chequeos en Paso de los Libres
          </h1>

          <p className="text-lg sm:text-2xl text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow">
            Cotizá tus análisis o enviá tu orden médica directamente por WhatsApp al <strong className="text-emerald-400 font-bold">{PHONE_DISPLAY}</strong>. Resultados rápidos y extracciones a domicilio.
          </p>

          {/* BOTÓN GIGANTE PULSÁTIL CON DESTELLO (CTA PRINCIPAL) */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <a 
              href={getWaLink("Hola, tengo una orden médica y quisiera enviarla para presupuesto o indicaciones (Paso de los Libres)")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-xl shadow-emerald-900/40 animate-pulse transition-all active:scale-95"
            >
              {/* Destello automático que cruza el botón */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-[shimmer_2.5s_infinite] pointer-events-none"></span>
              <MessageCircle className="w-8 h-8 fill-current shrink-0 animate-bounce" />
              <span>Enviar Foto de Orden Médica</span>
            </a>

            <a 
              href="#perfiles" 
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-2xl border border-white/20 backdrop-blur-md transition-colors text-center"
            >
              Ver Todos los Perfiles ↓
            </a>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-4xl mx-auto px-4 pt-10">

        {/* SECCIÓN: 8 PERFILES DESTACADOS Y PROMOCIONES CON DISTINTOS COLORES */}
        <section id="perfiles" className="scroll-mt-20">
          
          <div className="mb-8 text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-sm uppercase tracking-wider rounded-lg mb-2">
              Promociones y Chequeos Preventivos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Perfiles Bioquímicos Completos</h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">Elegí tu chequeo y consultá precio o turno por WhatsApp en el acto:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {perfiles.map((p) => (
              <div 
                key={p.id}
                className={`p-6 bg-white rounded-3xl border-2 ${p.borderColor} shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between relative overflow-hidden group`}
              >
                {/* Fondo iluminado sutil con el color temático */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${p.glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform`}></div>

                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 ${p.badgeColor} text-xs sm:text-sm font-black rounded-lg`}>
                      {p.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {p.ayuno}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mt-1">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-black ${p.titleColor} leading-snug`}>{p.name}</h3>
                      <p className={`text-xs font-bold ${p.subTitleColor} uppercase tracking-wide`}>{p.sub}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base mt-3.5 leading-relaxed">
                    <strong>Incluye:</strong> {p.desc}
                  </p>
                </div>

                {/* Botón interactivo con destello */}
                <a 
                  href={getWaLink(`Hola, quisiera consultar por el ${p.name} (Sarmiento 902, Paso de los Libres)`)}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`relative overflow-hidden group/btn w-full py-4 bg-gradient-to-r ${p.btnGradient} text-white font-black text-lg rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95`}
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/25 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                  <span>Pedir Precio por WhatsApp</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* EXTRACCIÓN A DOMICILIO CON FOTO DE FONDO REAL */}
        <section className="mt-14 relative rounded-3xl overflow-hidden shadow-xl border border-indigo-900">
          {/* Imagen de fondo con gradiente superpuesto */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${homeCareImg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-950/90 to-indigo-900/80"></div>

          <div className="relative z-10 p-7 sm:p-10 space-y-4 text-white">
            <span className="inline-block px-3 py-1 bg-indigo-500/30 text-indigo-300 font-black text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-indigo-400/30">
              Servicio en tu hogar
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Extracciones a Domicilio en Paso de los Libres</h2>
            <p className="text-indigo-100 text-base sm:text-xl max-w-2xl leading-relaxed">
              Un bioquímico de nuestro equipo va a tu domicilio con materiales descartables estériles y valija térmica de refrigeración. Ideal para personas mayores, niños o quienes prefieran la comodidad de su casa.
            </p>

            <div className="pt-2">
              <a 
                href={getWaLink("Hola, quisiera solicitar un turno de extracción a domicilio en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xl rounded-2xl shadow-xl transition-all active:scale-95"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
                <span>Pedir Bioquímico a Domicilio por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* GUÍA RÁPIDA DE AYUNO */}
        <section className="mt-14 pt-8 border-t border-slate-300">
          <div className="mb-6">
            <span className="text-slate-500 font-extrabold text-sm uppercase tracking-wider">Preparación previa</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">¿Cuántas horas de ayuno necesitás?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-lg shrink-0">
                8 hs
              </div>
              <div>
                <strong className="text-lg text-slate-900 block font-bold">Rutina general</strong>
                <p className="text-sm text-slate-600 mt-0.5">Glucemia, Hemograma, Hepatograma, Tiroides y la mayoría de los estudios comunes.</p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-lg shrink-0">
                12 hs
              </div>
              <div>
                <strong className="text-lg text-slate-900 block font-bold">Colesterol y Triglicéridos</strong>
                <p className="text-sm text-slate-600 mt-0.5">Perfil Lipídico estricto. Se permite tomar agua mineral en pequeñas cantidades.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OBRAS SOCIALES / PREPAGAS */}
        <section className="mt-14 pt-8 border-t border-slate-300">
          <div className="text-center sm:text-left mb-6">
            <span className="text-emerald-700 font-extrabold text-sm uppercase tracking-wider">Convenios y Obras Sociales</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Atendemos Prepagas, IOSCOR y Particulares</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">Envianos foto de tu carnet o credencial por WhatsApp para validar tu cobertura en minutos:</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">IOSCOR</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">OSDE</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">Swiss Medical</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">PAMI</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">Galeno</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">Medifé</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 font-black text-slate-800 text-base sm:text-lg shadow-sm">Sancor Salud</div>
            <div className="p-4 bg-white rounded-2xl border-2 border-emerald-300 font-black text-emerald-800 text-base sm:text-lg shadow-sm bg-emerald-50/50">Particulares</div>
          </div>
        </section>

        {/* SEDE, DIRECCIÓN EXACTA Y CONTACTO */}
        <section className="mt-14 pt-8 border-t border-slate-300">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-md space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Ubicación y Atención</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">Laboratorio Schvarzstein</h2>
            </div>
            
            <div className="space-y-4 text-base sm:text-lg text-slate-700">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-lg font-bold">Dirección en Paso de los Libres:</strong>
                  <span>Sarmiento 902</span><br />
                  <span className="text-slate-500 text-sm">Paso de los Libres, Corrientes, Argentina</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <Phone className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 block text-lg font-bold">WhatsApp Directo:</strong>
                  <a 
                    href={getWaLink("Hola, quisiera hacer una consulta al Laboratorio de Sarmiento 902")}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-700 font-black text-2xl hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <span className="block text-slate-500 text-sm mt-0.5">Consultas, cotizaciones y pedidos de turno al instante</span>
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
                className="relative overflow-hidden group w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg text-center rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <span>Escribir a Sarmiento 902 por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* BARRA FIJA INFERIOR PARA TELÉFONOS CON BOTÓN PULSÁTIL Y DESTELLO */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-50 md:hidden shadow-2xl">
        <a 
          href={getWaLink("Hola, deseo consultar por un análisis en Laboratorio Schvarzstein (Sarmiento 902, Paso de los Libres)")}
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative overflow-hidden group w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-center rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg animate-pulse"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
          <MessageCircle className="w-6 h-6 fill-current animate-bounce" />
          <span>WhatsApp: {PHONE_DISPLAY}</span>
        </a>
      </div>

    </div>
  );
}
