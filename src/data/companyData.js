import ogShareImage from "../assets/img/bascula-2019.png?url";

export const companyData = {
  name: "DASTIONS",
  legalName: "Digital Applications Solutions, S.L.",
  tagline: "Sistemas de pesaje Bilanciai",
  subtitle: "Distribuidor oficial Bilanciai Group en Espana",
  phone: "+34 977 131 206",
  email: "info@dastions.com",
  website: "https://www.dastions.com",
  websiteLabel: "www.dastions.com",
  address: "Espana",
  schedule: "Lunes a viernes: 08:00 - 18:00",
  catalogEdition: "Edicion catalogo 4/2024",
  siteUrl: "https://www.dastions.com",
  ogImage: ogShareImage,
  seoBrandSuffix: "DASTIONS",
  founded: "1997",
  yearsDigitalTech: "1997",
  coverage: "Cobertura nacional"
};

export const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Soluciones", to: "/soluciones" },
  { label: "Servicio Tecnico", to: "/servicio-tecnico" },
  { label: "Contacto", to: "/contacto" }
];

export const certificationPills = [
  { label: "OIML R-60", active: true },
  { label: "CE", active: true },
  { label: "NTEP", active: true },
  { label: "ATEX", active: false },
  { label: "IP68 / IP69K", active: false },
  { label: "Garantia 5 anos digital", active: false }
];

export const certificationBar = [
  { badge: "CE", name: "Declaracion conformidad" },
  { badge: "M", name: "Homologacion metrologica" },
  { badge: "Ex", name: "ATEX certificado" },
  { badge: "R60", name: "OIML R-60" },
  { badge: "IP", name: "IP68 / IP69K" },
  { badge: "NP", name: "Aprobacion NTEP" }
];

export const heroStats = [
  { num: "6000", suffix: "e", label: "Divisiones OIML max." },
  { num: "80", suffix: "t", label: "Capacidad maxima" },
  { num: "1997", suffix: "", label: "Desde / tecnologia digital" },
  { num: "5", suffix: "", label: "Anos garantia version digital" }
];

export const valuePillars = [
  {
    title: "Distribucion oficial Bilanciai",
    description:
      "Acceso a gama completa de celulas digitales, basculas puente y terminales homologados para pesaje de vehiculos."
  },
  {
    title: "Tecnologia digital desde 1997",
    description:
      "CPD-M y electronica integrada con diagnostico continuo, proteccion IP68/IP69K y hasta 6000 divisiones OIML."
  },
  {
    title: "Ingenieria de instalacion",
    description:
      "Proyectos sobresuelo y empotrados: modulares SBP/M-SB hasta 80 t y BP-3103H en hormigon con obra civil optimizada."
  },
  {
    title: "Soporte y formacion",
    description:
      "Asistencia tecnica, terminales DD700 multicanal y opciones de conectividad industrial para integrar con su sistema."
  }
];

export const solutions = [
  "CPD-M: celula digital de pesaje (20 / 35 / 50 t)",
  "SBP/M-SB: bascula puente metalica modular hasta 80 t",
  "BP-3103H: bascula puente mixta acero + hormigon hasta 60 t",
  "DD700: terminal de pesaje con filtro DIGITAL FIR y hasta 12 celulas digitales",
  "Accesorios: ATEX, multirange, galvanizado, Dilink, barandillas, rampas",
  "Integracion: RS232/485, USB, Ethernet, fieldbus bajo pedido"
];
