import imgBascula from "../assets/img/bascula-2019.png?url";
import imgCelula from "../assets/img/cell-celula-de-carga.png?url";
import imgPlataforma from "../assets/img/plataforma-metalica.png?url";
import imgTerminal from "../assets/img/terminal-automatico.png?url";

/** Imagenes locales (src/assets/img) */
export const catalogImages = {
  heroSide: imgBascula,
  cpd: imgCelula,
  sbp: imgPlataforma,
  bp3103h: imgBascula,
  dd700: imgTerminal
};

export const productCards = [
  {
    id: "cpd-m",
    number: "01",
    model: "CPD-M",
    name: "Celula digital de pesaje",
    description:
      "Celula de carga digital disenada y producida integramente por Coop Bilanciai. Alta precision, maxima fiabilidad, construida en acero inoxidable 17-4 PH con 8 galgas extensometricas y electronica de ultima generacion integrada.",
    specs: [
      { key: "Capacidad", value: "20 / 35 / 50 t", highlight: false },
      { key: "Divisiones OIML", value: "Max. 6000", highlight: true },
      { key: "Proteccion", value: "IP68 / IP69K", highlight: false },
      { key: "Sobrecarga max.", value: "150%", highlight: false },
      { key: "Carga lateral max.", value: "10%", highlight: false },
      { key: "Temp. nominal", value: "-10 / +40 C", highlight: false },
      { key: "Temp. func. max.", value: "-30 / +70 C", highlight: false },
      { key: "Material", value: "INOX 17-4 PH", highlight: false }
    ]
  },
  {
    id: "sbp",
    number: "02",
    model: "SBP/M-SB",
    name: "Bascula puente metalica",
    description:
      "Bascula puente modular de estructura isostatica para instalaciones empotradas o elevadas. Capacidad hasta 80 t, facil transporte, acceso superior para limpieza y garantia de 5 anos en version digital.",
    specs: [
      { key: "Capacidad max.", value: "80 t", highlight: true },
      { key: "Divisiones", value: "10 / 20 kg", highlight: false },
      { key: "Longitud", value: "6 - 21 m", highlight: false },
      { key: "Anchura", value: "3 m", highlight: false },
      { key: "Celulas", value: "4 - 10", highlight: false },
      { key: "Instalacion", value: "Empotrada / Elevada", highlight: false },
      { key: "Garantia", value: "5 anos (digital)", highlight: true },
      { key: "Multirange", value: "Disponible", highlight: false }
    ]
  },
  {
    id: "bp3103h",
    number: "03",
    model: "BP-3103H",
    name: "Bascula puente hormigon",
    description:
      "Bascula puente mixta (acero + losa de hormigon in situ) para instalacion sobresuelo. Plataforma de 3,50 m de ancho, 6 apoyos hasta 18 m, rampas de solo 280 mm.",
    specs: [
      { key: "Capacidad max.", value: "60.000 kg", highlight: true },
      { key: "Longitudes", value: "8 / 12 / 14 / 16 / 18 m", highlight: false },
      { key: "Ancho plataforma", value: "3,50 m", highlight: false },
      { key: "Ancho util", value: "3,30 m", highlight: false },
      { key: "Rampas", value: "280 mm", highlight: false },
      { key: "Instalacion", value: "Sobresuelo", highlight: false }
    ],
    secondary: {
      number: "04",
      model: "DD700",
      name: "Terminal de pesaje",
      description:
        "Indicadores de peso con pantalla grafica retroiluminada, filtro DIGITAL FIR y comunicacion multicanal. Versiones: escritorio, industrial (IC), rack y SELF con pago por monedas / RFID.",
      specs: [
        { key: "Resolucion max.", value: "6000e OIML", highlight: true },
        { key: "Celulas digitales", value: "Hasta 12", highlight: false },
        { key: "Proteccion", value: "IP65 / IP69K", highlight: false }
      ]
    }
  }
];

export const cpdDetail = {
  intro:
    "Disenada y producida completamente por Coop Bilanciai desde 1997. Patentes internacionales MO2003A0013, EP163194, US7151230, US7361851. Robusta, fiable y con diagnostico continuo integrado.",
  features: [
    {
      title: "8 galgas extensometricas",
      text: "Alta precision y repetibilidad, incluso en posicion no vertical."
    },
    {
      title: "Cuerpo en acero inoxidable 17-4 PH",
      text: "Material altamente resistente a la corrosion. Apto para ambientes salinos."
    },
    {
      title: "Conector estanco IP68/IP69K en acero inoxidable",
      text: "Facilita la instalacion y el mantenimiento, optimizando el uso de cable."
    },
    {
      title: "Inclinacion hasta 5 (15 mm desde vertical)",
      text: "Evita problemas por dilataciones termicas y deformaciones elasticas del puente."
    },
    {
      title: "Sistema auto-estabilizado con antirotacion",
      text: "Impide la rotacion de la celula y el retorcimiento del cable."
    },
    {
      title: "Proteccion en cono 45 (SP 1 mm)",
      text: "La oscilacion elimina residuos que podrian depositarse y comprometer el sistema."
    },
    {
      title: "Proteccion triple contra rayos",
      text: "Disco aislante + malla de cobre trenzado + limitadores de sobretensiones en tarjeta."
    },
    {
      title: "Placa electronica con autodiagnostico",
      text: "Diagnostico continuo de cada componente. Verificaciones remotas via modem."
    },
    {
      title: "Cable a prueba de roedores",
      text: "Malla protectora de acero inoxidable (opcional)."
    },
    {
      title: "Gama ATEX disponible",
      text: "Soluciones certificadas para zonas peligrosas. EXI y Z22."
    }
  ],
  specsRows: [
    ["Capacidad", "20 / 35 / 50 t"],
    ["Grado de proteccion", "IP68 / IP69K"],
    ["Intervalos OIML R-60", "Max. 6.000"],
    ["Sobrecarga maxima", "150%"],
    ["Carga lateral maxima", "10%"],
    ["Rango temperatura nominal", "-10 / +40 C"],
    ["Temperatura func. maxima", "-30 / +70 C"],
    ["Temperatura almacenaje max.", "-40 / +80 C"],
    ["Material cuerpo", "Acero inoxidable 17-4 PH"],
    ["Dimensiones (altura)", "264 mm (versiones bajas bajo pedido)"],
    ["Base", "150 mm / 260 mm"],
    [
      "Version EXI",
      "II 1 G Ex ia IIC T5 Ga; II 1 D Ex ia IIIC T100 C Da - Tamb (-20/+50 C)"
    ],
    ["Version Z22", "II 3 D Ex tc IIIC T=80 C Dc IP6x (-20/+55 C)"]
  ],
  quality:
    "Cada celula se somete a pruebas de materiales hasta el 120% de la capacidad maxima, controles metalograficos y ensayos de dureza, comprobacion metrologica por comparacion con grupos de referencia calibrados LAT, trazabilidad por numero de serie y codigo de barras, y pruebas de compensacion a diferentes temperaturas adaptadas individualmente.",
  summaryRows: [
    ["CPR-M", "Analogica", "C3", "3.000"],
    ["CPD-M", "Digital", "C4", "4.000 (hasta 6.000)"]
  ]
};

export const sbpStrengths = [
  {
    title: "Estructura modular",
    text: "Estructura isostatica a modulos independientes. Facil transporte, manipulacion y montaje."
  },
  {
    title: "Facil mantenimiento",
    text: "Paneles anchos accesibles desde arriba. Trampillas introspectivas para acceder a las celulas."
  },
  {
    title: "Alta durabilidad",
    text: "Vigas y placas gruesas de acero. Tornilleria inoxidable. Distribucion uniforme del peso."
  },
  {
    title: "Celulas autopulentes",
    text: "Celulas equilibradas evitan contaminacion por suciedad. Posicionadas a 35 cm de la pared."
  },
  {
    title: "Autodiagnostico",
    text: "Con celulas digitales: autodiagnostico individual en tiempo real de cada componente."
  },
  {
    title: "Multirange",
    text: "Division minima mas ventajosa en relacion con el alcance. Dilink para conexiones inalambricas."
  }
];

export const sbpApplications =
  "Instalaciones elevadas (rampa 40 cm), instalaciones empotradas, instalaciones sobre chasis, posibilidad de ampliar la longitud sucesivamente.";

export const sbpAccessories = [
  "Version ATEX",
  "Multirange",
  "Galvanizada en caliente",
  "Color personalizado",
  "Barandillas",
  "Rampas metalicas",
  "Terminales e impresoras",
  "Kit anti roedores",
  "Dilink inalambrico",
  "Marco de metal"
];

export const sbpModels = [
  ["SBP/M-SB 63", "6,04", "4", "40", "10"],
  ["SBP/M-SB 83", "8,00", "6", "50", "10"],
  ["SBP/M-SB 93", "9,56", "6", "50", "10"],
  ["SBP/M-SB 103", "10,89", "6", "50", "10"],
  ["SBP/M-SB 123", "12,22", "6", "50", "10"],
  ["SBP/M-SB 143", "14,00", "8", "80", "20"],
  ["SBP/M-SB 163", "15,89", "8", "60-80", "20"],
  ["SBP/M-SB 183", "18,00", "8", "60-80", "20"],
  ["SBP/M-SB 203", "19,78", "10", "60-80", "20"],
  ["SBP/M-SB 213", "21,11", "10", "60-80", "20"]
];

export const bpAdvantages = [
  {
    title: "Menor obra civil",
    text: "Plataforma con 6 apoyos (vs 8 habitual), hasta 18 m de longitud. Ahorro significativo de excavacion."
  },
  {
    title: "Menos hormigon",
    text: "Aproximadamente un 13% menos de hormigon en la plataforma frente a alternativas equivalentes."
  },
  {
    title: "Plataforma desmontable en 2 secciones",
    text: "Solo 4 vigas maestras y 4 traveseras. Transporte y montaje mas eficientes."
  },
  {
    title: "Rampas mas bajas - 280 mm",
    text: "Accesos mas comodos y seguros. Hasta 1 metro menos de longitud de rampa por acceso, con ahorro de espacio y hormigon (hasta 40% en rampas)."
  },
  {
    title: "Ancho plataforma 3,50 m - util 3,30 m",
    text: "Facilita el acceso con menor numero de maniobras."
  },
  {
    title: "Solo 6 celulas de carga",
    text: "Menos tiempo de montaje y cableado. Acceso a las celulas exteriormente, sin levantar chapas."
  },
  {
    title: "Seguridad",
    text: "Barandas laterales quitamiedos robustas. Topes de cabecera en material anticollision."
  }
];

export const bpApplications = [
  "Constructoras",
  "Puertos y logistica",
  "Plantas de residuos",
  "Industria",
  "Aridos",
  "Instalacion sobresuelo siempre"
];

export const bpConfigs = [
  ["BP-3103H", "8 x 3,50 m", "4", "30.000 kg"],
  ["BP-3103H", "12 x 3,50 m", "6", "50.000 kg"],
  ["BP-3103H", "14 x 3,50 m", "6", "60.000 kg"],
  ["BP-3103H", "16 x 3,50 m", "6", "60.000 kg"],
  ["BP-3103H", "18 x 3,50 m", "6", "60.000 kg"]
];

export const bpConstruction =
  "Estructura metalica portante + losa de hormigon ejecutada in situ. Dos vigas longitudinales tipo puente, cada una formada por doble perfil IPE (superior e inferior) unidos mediante distanciadores formando una armadura/cercha. El perfil inferior integra el alojamiento para doble mallazo y el hormigon. El perfil superior aporta rigidez y actua como proteccion lateral.";

export const dd700Variants = [
  { model: "DD700", desc: "Version escritorio - ABS", ip: "IP65" },
  { model: "DD700ic", desc: "Version industrial - Inox", ip: "IP65" },
  { model: "DD700i", desc: "Version IP69K", ip: "IP69K" },
  { model: "DD700 Rack", desc: "Version rack", ip: "IP65" },
  { model: "DD700 Self", desc: "Autopago: monedas / RFID", ip: "IP65" }
];

export const dd700Highlights = [
  {
    title: "Sistema de comunicacion multicanal",
    text: "Gestion de 2 basculas desde un unico terminal. Mejora la productividad."
  },
  {
    title: "Teclado multifuncion + USB",
    text: "Teclado USB externo para introducir datos rapidamente."
  },
  {
    title: "Filtro DIGITAL FIR",
    text: "Tarjeta convertidor de alta velocidad. Pesadas rapidas y precisas."
  },
  {
    title: "Diagnostico detallado",
    text: "Informes de fallas en tiempo real para celulas digitales."
  },
  {
    title: "DD700 SELF",
    text: "Gestion de basculas publicas con pago en fichas, monedas o tarjetas prepago RFID. Impresora integrada de 60 mm."
  }
];

export const dd700Tech = [
  ["Resolucion max. homologada", "6000e OIML (x2 4000e, x3 3000e)"],
  ["Celulas digitales max.", "12"],
  ["Celulas analogicas max.", "12 x 350 por bascula"],
  ["N maximo basculas", "x1 digital, x2 analogicas (multiplex)"],
  ["Alimentacion celulas", "5 Vdc"],
  ["Pantalla", "135x32 mm grafica retroiluminada"],
  ["Temperatura func.", "-10 / +40 C"],
  ["Temperatura almacenaje", "-20 / +70 C"]
];

export const dd700Ports = [
  "RS232",
  "RS232/RS485/RS422",
  "USB-Host",
  "USB-Client",
  "x2 Entradas digitales",
  "x2 Salidas digitales"
];

export const dd700Options = [
  "Salida analogica 0-10V / 4-20mA",
  "Profibus DP",
  "Profinet",
  "Ethernet/IP",
  "Ethernet TCP/IP",
  "WiFi externo",
  "4E/4S optoaisladas",
  "Memoria Alibi MPP",
  "Barra LED multicolor"
];

export const dd700Certs = ["CE", "Homologacion metrologica 2014/31/UE", "OIML R76-1", "Acero inoxidable"];
