interface IChampion {
  name: string
  role: string
  type: string
  age?: number
  skills?: {
    Q: string
    W: string
    E: string
    R: string
  }
  counters: IChampion[]
}

interface ILOL {
  version: string
  champions: IChampion[]
  addChamp: Function
  addCounters: Function
}

export const LOL: ILOL = {
  version: '1.2',
  champions: [],
  addChamp(champName: string, champRole: string = 'mid', champType: string): IChampion[] {
    const champ: IChampion = {
      name: champName,
      role: champRole,
      type: champType,
      counters: [],
    }

    LOL.champions.push(champ)
    return LOL.champions
  },
  addCounters(position: number, counter: number) {
    //acceder a un campeón en específico que vendrá desde una variable externa
    //De ese campeón, acceder al array "counters" y añadir otro campeón que también vendrá de una variable externa
    LOL.champions[position].counters.push(LOL.champions[counter])
  },
}
