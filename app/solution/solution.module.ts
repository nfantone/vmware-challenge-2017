import { FaasStatusListComponent } from './faas-status-list/faasStatusList.component';
import { FaasStatusService } from './providers/faasStatus.service';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';

@NgModule({
   imports: [SharedModule, ClarityModule.forChild()],
   declarations: [SolutionComponent, FaasStatusListComponent],
   exports: [SolutionComponent],
   providers: [FaasStatusService]
})
export class SolutionModule { }
