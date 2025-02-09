import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'signaler'
})

export class Signaler {
  count = signal<number>(0);
  showCount = signal<boolean>(false);

  countUpdate = computed(() => {
    this.count.update(value => value + 1);
  })
}
