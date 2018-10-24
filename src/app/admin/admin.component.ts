import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, managers: string, description: string, goal: number, currentAmount: number, swag: boolean) {
    const newProject: Project = new Project(title, managers, description, goal, currentAmount, swag);
    this.projectService.addProject(newProject);
  }

}
