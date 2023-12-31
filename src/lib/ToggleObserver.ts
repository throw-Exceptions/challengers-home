import { BehaviorSubject } from 'rxjs';

class ToggleObserver {
  private observable = new BehaviorSubject<boolean>(false);

  get isOpened() {
    return this.observable.getValue();
  }

  public toggle = () => this.observable.next(!this.observable.getValue());

  public open = () => this.observable.next(true);

  public close = () => this.observable.next(false);

  public subscribe = (cb: (v: boolean) => void) =>
    this.observable.subscribe(cb);
}

export default new ToggleObserver();
