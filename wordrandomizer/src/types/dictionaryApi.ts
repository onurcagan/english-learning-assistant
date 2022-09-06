export interface Meta {
  id: string
  uuid: string
  sort: string
  src: string
  section: string
  stems: string[]
  offensive: boolean
}

export interface Sound {
  audio: string
  ref: string
  stat: string
}

export interface Pr {
  mw: string
  sound: Sound
}

export interface Hwi {
  hw: string
  prs: Pr[]
}

export interface Sound2 {
  audio: string
  ref: string
  stat: string
}

export interface Pr2 {
  mw: string
  sound: Sound2
}

export interface In {
  if: string
  prs: Pr2[]
}

export interface Def {
  vd: string
  sseq: any[][][]
  sls: string[]
}

export interface Sound3 {
  audio: string
  ref: string
  stat: string
}

export interface Pr3 {
  mw: string
  sound: Sound3
}

export interface Uro {
  ure: string
  prs: Pr3[]
  fl: string
}

export interface Def2 {
  sseq: any[][][]
}

export interface Dro {
  drp: string
  def: Def2[]
}

export interface Cxti {
  cxt: string
}

export interface Cx {
  cxl: string
  cxtis: Cxti[]
}

export interface RootObject {
  meta: Meta
  hom: number
  hwi: Hwi
  fl: string
  ins: In[]
  def: Def[]
  uros: Uro[]
  dros: Dro[]
  et: string[][]
  date: string
  shortdef: string[]
  cxs: Cx[]
}
