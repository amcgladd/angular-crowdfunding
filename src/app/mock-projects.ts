import { Project } from './models/project.model'

export const PROJECTS: Project[] = [
 new Project("Epicodus Student ", "Colin and AJ",
     "Please help two struggling coding students repay their debts incurred from attending Epicodus.", 25000, 32, true, 1),
 new Project("Save the beavers", "Wildlife Association",
     "Your donations will help beavers have nice new homes with central heating", 5000, 2500, false, 2)
];
