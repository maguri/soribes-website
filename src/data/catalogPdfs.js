import pdfBpCaracteristicas from "../assets/pdf/CARACTERISTICAS BP3103-H.pdf?url";
import pdfBpHormigon from "../assets/pdf/bp hormigon BP3103-H -DAS.pdf?url";
import pdfCpdM from "../assets/pdf/Células_Digitales_Bilanciai_CPD_M_dastions.pdf?url";
import pdfSbp from "../assets/pdf/SBP_M_SB_ES_dastions.pdf?url";
import pdfDd700 from "../assets/pdf/Visor_DD700_ES_web camiones dastions +.pdf?url";

/** Descarga sugerida (atributo download); el navegador puede ignorarlo en origen cruzado */
export const downloadNames = {
  cpdM: "Celulas_Digitales_Bilanciai_CPD-M_dastions.pdf",
  sbp: "SBP_M_SB_ES_dastions.pdf",
  bpCaracteristicas: "CARACTERISTICAS_BP3103-H.pdf",
  bpHormigon: "BP3103-H_hormigon_DAS.pdf",
  dd700: "Visor_DD700_ES_camiones_dastions.pdf"
};

export const catalogPdfs = {
  cpdM: {
    url: pdfCpdM,
    title: "Celulas digitales CPD-M",
    short: "CPD-M (PDF)",
    downloadName: downloadNames.cpdM
  },
  sbp: {
    url: pdfSbp,
    title: "Bascula puente metalica SBP/M-SB",
    short: "SBP/M-SB (PDF)",
    downloadName: downloadNames.sbp
  },
  bpCaracteristicas: {
    url: pdfBpCaracteristicas,
    title: "BP-3103H - Ficha de caracteristicas",
    short: "BP-3103H caracteristicas (PDF)",
    downloadName: downloadNames.bpCaracteristicas
  },
  bpHormigon: {
    url: pdfBpHormigon,
    title: "BP-3103H - Bascula hormigon (DAS)",
    short: "BP-3103H hormigon DAS (PDF)",
    downloadName: downloadNames.bpHormigon
  },
  dd700: {
    url: pdfDd700,
    title: "Terminal DD700 (visor ES)",
    short: "DD700 (PDF)",
    downloadName: downloadNames.dd700
  }
};

/** Portada: bloque "Catalogo de Basculas" */
export const basculaCatalogSection = {
  eyebrow: "Documentacion",
  title: "Catalogo de Basculas",
  description:
    "Folletos y documentos comerciales en PDF: basculas puente, plataforma hormigon, celulas digitales y terminal de pesaje."
};

/** Tarjetas para la seccion de portada (orden comercial) */
export const basculaCatalogCards = [
  {
    id: "sbp",
    ...catalogPdfs.sbp,
    tag: "Puente metalica"
  },
  {
    id: "bp-car",
    ...catalogPdfs.bpCaracteristicas,
    tag: "Hormigon"
  },
  {
    id: "bp-horm",
    ...catalogPdfs.bpHormigon,
    tag: "Hormigon"
  },
  {
    id: "cpd",
    ...catalogPdfs.cpdM,
    tag: "Celulas"
  },
  {
    id: "dd700",
    ...catalogPdfs.dd700,
    tag: "Terminal"
  }
];
