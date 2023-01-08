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

export interface In {
  if: string
}

export interface Def {
  vd: string
  sseq: any[][][]
}

export interface Uro {
  ure: string
  fl: string
}

export interface Syn {
  pl: string
  pt: any[][]
}

export interface RootObject {
  meta: Meta
  hwi: Hwi
  fl: string
  ins: In[]
  def: Def[]
  uros: Uro[]
  syns: Syn[]
  et: string[][]
  date: string
  shortdef: string[]
}
