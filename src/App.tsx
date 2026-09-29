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
  UserCheck,
  Dna,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

import heroLabImg from './assets/images/hero_modern_lab_1790682107345.jpg';
import homeCareImg from './assets/images/bg_home_care_1790682124783.jpg';
import prostateImg from './assets/images/bg_profile_prostate_1790700220846.jpg';
import tumorImg from './assets/images/bg_profile_tumor_1790700233694.jpg';
import womenImg from './assets/images/bg_profile_women_1790700255647.jpg';
import menImg from './assets/images/bg_profile_men_1790700320153.jpg';
import fitnessImg from './assets/images/bg_profile_fitness_1790699310811.jpg';
import wellnessImg from './assets/images/bg_profile_wellness_1790699283612.jpg';

export default function App() {
  const WHATSAPP_NUMBER = "5493772636749";
  const PHONE_DISPLAY = "3772-636749";

  const getWaLink = (msg: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const perfiles = [
    {
      id: "mujeres_integral",
      tag: "★ MUJER & EXUDADO VAGINAL",
      photo: womenImg,
      badgeColor: "bg-fuchsia-600 text-white",
      borderColor: "border-fuchsia-400 hover:border-fuchsia-600",
      btnGradient: "from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500",
      name: "Perfil Integral Mujeres + Exudado Vaginal",
      sub: "Ginecológico, Infeccioso y Hormonal",
      ayuno: "8 hs ayuno / 48 hs abstinencia sexual",
      desc: "Exudado Vaginal completo (fresco y coloración de Gram para diagnóstico de Vaginosis, Trichomonas, Candida, Gardnerella), Cultivo e Identificación bacteriológica con Antibiograma, más Hemograma completo, Ferritina sérica, Subunidad Beta HCG, Perfil Hormonal (FSH, LH, Estradiol, Progesterona, Prolactina) y Urocultivo."
    },
    {
      id: "hombres_integral",
      tag: "★ HOMBRES INTEGRAL",
      photo: menImg,
      badgeColor: "bg-blue-700 text-white",
      borderColor: "border-blue-500 hover:border-blue-700",
      btnGradient: "from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600",
      name: "Perfil Completo Hombres",
      sub: "Salud Masculina, Vitalidad y Metabolismo",
      ayuno: "8 hs ayuno",
      desc: "Hemograma completo, Glucemia, Perfil Lipídico (Colesterol Total, HDL, LDL, Triglicéridos), Hepatograma, Uricemia (Gota), Uremia, Creatinina, Testosterona Total y Libre, PSA Total prostático, TSH Ultrasensible y Orina Completa."
    },
    {
      id: "tumorales",
      tag: "★ PREVENCIÓN ONCOLÓGICA",
      photo: tumorImg,
      badgeColor: "bg-rose-700 text-white",
      borderColor: "border-rose-400 hover:border-rose-600",
      btnGradient: "from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500",
      name: "Panel Marcadores Tumorales",
      sub: "Detección Precoz y Monitoreo Onco-Bioquímico",
      ayuno: "8 hs ayuno",
      desc: "PSA Total y Libre (Próstata), CEA (Antígeno Carcinoembrionario - Colon/Gastrointestinal), CA 125 (Ovario/Ginecológico), CA 15-3 (Mama), CA 19-9 (Páncreas y Vía Biliar), y AFP (Alfa-fetoproteína - Hígado y Células Germinales)."
    },
    {
      id: "prostata_vitalidad",
      tag: "PRÓSTATA +40",
      photo: prostateImg,
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-400 hover:border-indigo-600",
      btnGradient: "from-indigo-600 to-blue-700 hover:from-indigo-500 hover:to-blue-600",
      name: "Perfil Próstata y Salud Urológica",
      sub: "Control Urológico Preventivo",
      ayuno: "4 hs ayuno (48 hs sin eyaculación)",
      desc: "PSA Total, PSA Libre, Relación Porcentual PSA Libre/Total, Testosterona Total, Glucemia, Ácido Úrico, Uremia, Creatinina y Sedimento Urinario con búsqueda de hematíes."
    },
    {
      id: "clinico",
      tag: "CHEQUEO RUTINA ANUAL",
      photo: wellnessImg,
      badgeColor: "bg-emerald-600 text-white",
      borderColor: "border-emerald-400 hover:border-emerald-600",
      btnGradient: "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500",
      name: "Perfil Clínico Completo",
      sub: "Chequeo Preventivo General",
      ayuno: "8 hs ayuno",
      desc: "Hemograma completo, Glucemia, Colesterol Total, HDL, LDL, Triglicéridos, Hepatograma (GOT, GPT, Bilirrubinas), Uremia, Creatinina y Orina completa."
    },
    {
      id: "tiroideo",
      tag: "HORMONAL & METABOLISMO",
      photo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-400 hover:border-purple-600",
      btnGradient: "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500",
      name: "Perfil Tiroideo & Energía",
      sub: "Control de Tiroides y Peso",
      ayuno: "8 hs ayuno",
      desc: "TSH ultrasensible, T4 Libre, T3 y Anticuerpos Anti-TPO. Ideal ante fatiga, caída de cabello, cambios de peso o control de medicación (Levotiroxina)."
    },
    {
      id: "deportivo",
      tag: "APTO FÍSICO & RENDIMIENTO",
      photo: fitnessImg,
      badgeColor: "bg-sky-600 text-white",
      borderColor: "border-sky-400 hover:border-sky-600",
      btnGradient: "from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500",
      name: "Perfil Deportivo & Gym",
      sub: "Control Muscular y Electrolitos",
      ayuno: "8 hs ayuno",
      desc: "Hemograma, Ionograma plasmático (Sodio/Potasio), CPK muscular (daño y recuperación), Magnesio, Ferremia, Ferritina sérica, Glucemia y Hepatograma."
    },
    {
      id: "vitamina_d",
      tag: "DEFENSAS & HUESOS",
      photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-amber-600 text-white",
      borderColor: "border-amber-400 hover:border-amber-600",
      btnGradient: "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500",
      name: "Perfil Vitamina D & Defensas",
      sub: "Inmunidad y Salud Ósea",
      ayuno: "8 hs ayuno",
      desc: "Vitamina D (25-OH), Vitamina B12, Calcio iónico, Fósforo sérico, Zinc y Ferritina sérica para evaluar defensas del organismo."
    },
    {
      id: "cardiovascular",
      tag: "CORAZÓN & ARTERIAS",
      photo: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-red-600 text-white",
      borderColor: "border-red-400 hover:border-red-600",
      btnGradient: "from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600",
      name: "Perfil Cardiovascular",
      sub: "Riesgo Arterial y Presión",
      ayuno: "12 hs ayuno",
      desc: "Perfil lipídico completo, Cociente Colesterol/HDL, Proteína C Reactiva Ultrasensible (PCR-us), Glucemia, Ácido Úrico e Ionograma."
    },
    {
      id: "hepatico",
      tag: "HÍGADO & DIGESTIVO",
      photo: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-teal-600 text-white",
      borderColor: "border-teal-400 hover:border-teal-600",
      btnGradient: "from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500",
      name: "Perfil Hepático y Digestivo",
      sub: "Control Hepático y Medicación",
      ayuno: "8 hs ayuno",
      desc: "Hepatograma completo (GOT, GPT, FAL, Bilirrubinas Total y Directa), Gamma GT, Proteínas Totales y Albúmina sérica."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans antialiased pb-28 md:pb-12 text-base sm:text-lg">
      
      {/* AVISO DE ATENCIÓN DIRECTA WHATSAPP CON DIRECCIÓN LOCAL */}
      <div className="bg-emerald-900 text-white py-2.5 px-4 text-center text-sm sm:text-base font-semibold border-b border-emerald-800">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
          <span>Paso de los Libres, Corrientes · Sarmiento 902 · WhatsApp: <strong>{PHONE_DISPLAY}</strong></span>
        </div>
      </div>

      {/* NAVEGACIÓN SIMPLE CON TEXTOS GRANDES */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-4 py-3.5 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-600/20">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <span className="block leading-none">Lab Schvarzstein</span>
              <span className="text-xs font-semibold text-emerald-700 tracking-normal">Paso de los Libres</span>
            </div>
          </a>

          {/* Botón WhatsApp Header */}
          <a 
            href={getWaLink("Hola, quisiera consultar por análisis en Laboratorio Schvarzstein de Paso de los Libres")}
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative overflow-hidden group px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-base font-extrabold rounded-2xl flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </nav>

      {/* PORTADA CON IMAGEN DE FONDO FOTOGRÁFICA CLARA Y VISTOSA */}
      <header className="relative text-white py-16 sm:py-24 px-4 overflow-hidden border-b border-slate-800 shadow-2xl">
        {/* IMAGEN DE FONDO ULTRA NÍTIDA Y VISIBLE */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroLabImg})` }}
        ></div>
        
        {/* Gradiente semi-transparente luminoso para que la foto se vea claramente */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-emerald-950/25"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/90 text-white text-sm font-bold rounded-full border border-emerald-400 backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
            Sarmiento 902 · Paso de los Libres, Corrientes
          </div>

          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
            style={{ textShadow: "0 3px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)" }}
          >
            Análisis clínicos y chequeos en Paso de los Libres
          </h1>

          <p 
            className="text-lg sm:text-2xl text-white font-semibold leading-relaxed max-w-3xl"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
          >
            Cotizá tus análisis o enviá tu orden médica directamente por WhatsApp al <strong className="text-emerald-300 font-extrabold underline underline-offset-4">{PHONE_DISPLAY}</strong>. Marcadores tumorales, perfiles completos de hombres y mujeres (con exudado vaginal), y extracciones a domicilio.
          </p>

          {/* BOTÓN GIGANTE PULSÁTIL CON DESTELLO (CTA PRINCIPAL) */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <a 
              href={getWaLink("Hola, tengo una orden médica y quisiera enviarla para presupuesto o indicaciones (Paso de los Libres)")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-2xl transition-all active:scale-95 animate-pulse"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-[shimmer_2.5s_infinite] pointer-events-none"></span>
              <MessageCircle className="w-8 h-8 fill-current shrink-0 animate-bounce" />
              <span>Enviar Foto de Orden Médica</span>
            </a>

            <a 
              href="#perfiles" 
              className="px-6 py-4 bg-black/40 hover:bg-black/60 text-white font-bold text-lg rounded-2xl border border-white/30 backdrop-blur-md transition-colors text-center shadow-lg"
            >
              Ver Todos los Perfiles ↓
            </a>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 pt-10">

        {/* DESTACADO RÁPIDO: ACCESO A LOS NUEVOS PANELES ESPECIALIZADOS */}
        <div className="mb-10 p-5 sm:p-6 bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-3xl shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-wider">Paneles Especializados</span>
            <h3 className="text-xl sm:text-2xl font-black">Marcadores Tumorales · Perfil Hombres · Perfil Mujeres con Exudado</h3>
            <p className="text-slate-300 text-sm sm:text-base">Consultá presupuesto inmediato y preparación requerida por WhatsApp.</p>
          </div>
          <a 
            href={getWaLink("Hola, quisiera consultar por los Paneles Especializados (Marcadores Tumorales, Hombres o Mujeres con Exudado)")}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base rounded-2xl shadow-lg transition-transform active:scale-95 text-center shrink-0"
          >
            Consultar al {PHONE_DISPLAY}
          </a>
        </div>

        {/* SECCIÓN: PERFILES CON FOTOGRAFÍA SUPERIOR CLARA Y VISIBLE */}
        <section id="perfiles" className="scroll-mt-20">
          
          <div className="mb-8 text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-sm uppercase tracking-wider rounded-lg mb-2">
              Promociones y Chequeos Preventivos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Perfiles Bioquímicos Completos</h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">Elegí tu chequeo y consultá precio o turno por WhatsApp en el acto:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perfiles.map((p) => (
              <div 
                key={p.id}
                className={`bg-white rounded-3xl overflow-hidden border-2 ${p.borderColor} shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-between`}
              >
                {/* FOTO DEL PERFIL AMPLIA, NÍTIDA Y COLORIDA */}
                <div className="h-48 sm:h-52 w-full overflow-hidden relative">
                  <img 
                    src={p.photo} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                  
                  {/* Badge temático */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1.5 ${p.badgeColor} text-xs sm:text-sm font-black rounded-lg shadow-md`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* Horas de ayuno */}
                  <div className="absolute top-3 right-3 max-w-[55%] text-right">
                    <span className="inline-block text-xs font-bold text-slate-900 bg-white/95 px-3 py-1 rounded-full shadow-md">
                      {p.ayuno}
                    </span>
                  </div>

                  {/* Subtítulo sobre la foto */}
                  <div className="absolute bottom-3 left-4 right-4 text-white font-extrabold text-sm sm:text-base drop-shadow-md">
                    {p.sub}
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">{p.name}</h3>
                    <p className="text-slate-600 text-base mt-2.5 leading-relaxed">
                      <strong>Incluye:</strong> {p.desc}
                    </p>
                  </div>

                  {/* Botón WhatsApp */}
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
              </div>
            ))}
          </div>
        </section>

        {/* EXTRACCIÓN A DOMICILIO CON FOTO CLARA DE FONDO */}
        <section className="mt-14 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-indigo-700">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${homeCareImg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-950/75 to-indigo-900/60"></div>

          <div className="relative z-10 p-7 sm:p-10 space-y-4 text-white">
            <span className="inline-block px-3 py-1.5 bg-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-md border border-indigo-400">
              Servicio en tu hogar
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
              Extracciones a Domicilio en Paso de los Libres
            </h2>
            <p className="text-white text-base sm:text-xl max-w-2xl leading-relaxed font-medium" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              Un bioquímico de nuestro equipo va a tu domicilio con materiales descartables estériles y valija térmica de refrigeración. Ideal para personas mayores, niños, personas con movilidad reducida o quienes prefieran la comodidad de su casa.
            </p>

            <div className="pt-2">
              <a 
                href={getWaLink("Hola, quisiera solicitar un turno de extracción a domicilio en Paso de los Libres")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-black text-xl rounded-2xl shadow-xl transition-transform active:scale-95"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                <span>Pedir Bioquímico a Domicilio</span>
              </a>
            </div>
          </div>
        </section>

        {/* UBICACIÓN, HORARIOS Y CONVENIOS */}
        <section className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Tarjeta Dirección y Horarios */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-lg space-y-5">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-emerald-600 shrink-0" />
              Sede Central
            </h3>
            
            <div className="space-y-3 text-slate-700 text-lg">
              <p>
                <strong className="text-slate-900 block text-xl">Sarmiento 902</strong>
                Paso de los Libres, Corrientes, Argentina.
              </p>
              
              <div className="pt-2 border-t border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block">Horario de Atención</span>
                <p className="font-semibold text-slate-800">Lunes a Viernes: 07:00 a 19:00 hs</p>
                <p className="font-semibold text-slate-800">Sábados: 07:30 a 12:00 hs</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block">Extracciones de Sangre</span>
                <p className="font-bold text-emerald-800">07:00 a 10:30 hs (Con ayuno correspondiente)</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Sarmiento+902,+Paso+de+los+Libres,+Corrientes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-emerald-700 font-extrabold hover:text-emerald-800 text-base"
            >
              <span>Ver en Google Maps</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Tarjeta Obras Sociales y Prepagas */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-lg space-y-5">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-teal-600 shrink-0" />
              Obras Sociales & Prepagas
            </h3>
            
            <p className="text-slate-600 text-base">
              Atendemos con las principales coberturas de la provincia de Corrientes y a nivel nacional:
            </p>

            <div className="flex flex-wrap gap-2 text-sm font-bold">
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">IOSCOR</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">PAMI</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">OSDE</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">SWISS MEDICAL</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">GALENO</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">MEDIFÉ</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">SANCOR SALUD</span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200">PARTICULARES</span>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                ¿No encontrás tu obra social? Escribinos al WhatsApp y te confirmamos cobertura al instante.
              </p>
            </div>

            <a 
              href={getWaLink("Hola, quisiera consultar si reciben mi obra social o prepaga")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-teal-700 font-extrabold hover:text-teal-800 text-base"
            >
              <span>Consultar cobertura por WhatsApp</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-16 bg-slate-900 text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xl font-black">
            <FlaskConical className="w-6 h-6 text-emerald-400" />
            <span>Laboratorio Schvarzstein</span>
          </div>
          <p className="text-slate-400 text-base">
            Bioquímica Clínica y Diagnóstico de Precisión · Sarmiento 902, Paso de los Libres, Corrientes, Argentina
          </p>
          <p className="text-slate-500 text-sm">
            WhatsApp de Consultas: <strong className="text-slate-300">{PHONE_DISPLAY}</strong>
          </p>
        </div>
      </footer>

      {/* BARRA FIJA PERMANENTE INFERIOR PARA TELÉFONOS MÓVILES */}
      <aside aria-label="Contacto rápido" className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-lg border-t border-slate-300 shadow-2xl">
        <a 
          href={getWaLink("Hola, quisiera consultar precios o enviar orden médica (Paso de los Libres)")}
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative overflow-hidden w-full py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white font-black text-xl rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/40 active:scale-95 transition-transform"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 fill-current shrink-0" />
          <span>Escribir por WhatsApp ({PHONE_DISPLAY})</span>
        </a>
      </aside>

    </div>
  );
}
