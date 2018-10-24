import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  }


}
