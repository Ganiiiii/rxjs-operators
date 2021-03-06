import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounctimeComponent } from './debounctime/debounctime.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { CombineAndWithLatestComponent } from './combine-and-with-latest/combine-and-with-latest.component';
import { ZipAndForkjoinComponent } from './zip-and-forkjoin/zip-and-forkjoin.component';


@NgModule({
  declarations: [
    ObservablesComponent,
    FromEventComponent,
    IntervalAndTimerComponent,
    OfFromComponent,
    ToArrayComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounctimeComponent,
    DistinctUntilChangedComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    CombineAndWithLatestComponent,
    ZipAndForkjoinComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ],
  exports: [ObservablesComponent]
})
export class ObservablesModule { }
