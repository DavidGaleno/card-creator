import { IStakeholder } from "interfaces/IStakeholder"

export interface ITeam {
    name: string
    primaryColor: string
    secondaryColor: string
    stakeholders: IStakeholder[]
}