import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid gap-8">
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex justify-between items-center mb-4">
            <h2 class="card-title text-3xl">My Projects</h2>
            <a 
              href="https://drive.google.com/drive-viewer/AKGpihZ--hIRqTMGDIRzCGUWi-KGIEHLIoC13wR74xjvheCvGl9NM0iAyLC0bazJaU64b_YcZ8hpFY6qu7oocXx9TkmeFUzxXtcPJ-c=s1600-rw-v1"
              target="_blank"
              class="btn btn-primary"
            >
              View CV
            </a>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            @for (project of projects; track project.id) {
              <div class="card bg-base-300">
                <div class="card-body">
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p>{{ project.description }}</p>

                  <div class="my-4">
                    <h4 class="font-bold">Key Features:</h4>
                    <ul class="list-disc ml-5">
                      @for (feature of project.keyFeatures; track feature) {
                        <li>{{ feature }}</li>
                      }
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2 my-2">
                    @for (tech of project.technologies; track tech) {
                      <span class="badge badge-primary whitespace-nowrap">{{ tech }}</span>
                    }
                  </div>
                  <div class="card-actions justify-end">
                    @if (project.githubUrl) {
                      <a href="{{ project.githubUrl }}" target="_blank" class="btn btn-outline btn-sm">GitHub</a>
                    }
                    @if (project.liveUrl) {
                      <a href="{{ project.liveUrl }}" target="_blank" class="btn btn-primary btn-sm">Live Demo</a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .badge {
      min-width: fit-content;
      padding: 0.5rem 1rem;
    }
  `]
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Encryption Web API',
      description: 'Created a secure API specifically for encryption and decryption tasks, emphasizing data integrity and user authentication.',
      keyFeatures: [
        'Secure API Design: Developed a RESTful API using ASP.NET Core that allows users to submit data for encryption or decryption securely.',
        'Responsive Angular Frontend: The frontend features a clean interface for user data input and result viewing.',
        'Persistent Storage with MySQL: Utilized MySQL for data storage, ensuring data integrity while allowing for complex queries.',
        'JWT-Based Authentication: Implemented JWT for secure user access to the API.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'MySQL', 'JWT'],
    },
    {
      id: 2,
      title: 'Fibonacci Task Manager',
      description: 'Created a platform for users to submit and manage tasks related to Fibonacci numbers, with real-time feedback and validation.',
      keyFeatures: [
        'Task Submission and Validation: Users can submit tasks specifying a number and receive instant validation.',
        'Real-Time Progress Tracking: Developed a feature that allows users to monitor the progress of their tasks in real time.',
        'Angular-Driven User Experience: The frontend is designed to be intuitive and responsive, enhancing user engagement.',
        'Backend Integration: The ASP.NET Core backend validates submitted numbers against the Fibonacci sequence.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'MySQL', 'JWT']
    }
  ];
}