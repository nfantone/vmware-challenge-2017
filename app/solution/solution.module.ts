import { ClarityModule } from 'clarity-angular';
import { FaasStatusService } from './providers/faasStatus.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';

@NgModule({
   imports: [SharedModule, ClarityModule.forRoot()],
   declarations: [SolutionComponent],
   exports: [SolutionComponent],
   providers: [FaasStatusService]
})
export class SolutionModule { }
