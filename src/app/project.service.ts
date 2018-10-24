import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId)
  }

  updateProject(localUpdatedProject){
    const projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({
      title: localUpdatedProject.title,
      managers: localUpdatedProject.managers,
      description: localUpdatedProject.description,
      goal: localUpdatedProject.goal,
      currentAmount: localUpdatedProject.currentAmount,
      swag: localUpdatedProject.swag});
    }

    deleteProject(localProjectToDelete){
     const projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
     projectEntryInFirebase.remove();
   }
  }
