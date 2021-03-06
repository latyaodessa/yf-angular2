import {Observable, BehaviorSubject} from 'rxjs/Rx';

export class WindowSize {
    width$: Observable<number>;
    height$: Observable<number>;

    constructor() {
        let windowSize$ = new BehaviorSubject(getWindowSize());
        this.width$ = (windowSize$.pluck('width') as Observable<number>).distinctUntilChanged();
        this.height$ = (windowSize$.pluck('height') as Observable<number>).distinctUntilChanged();

        Observable.fromEvent(window, 'resize')
            .map(getWindowSize)
            .subscribe(windowSize$);
    }
}

function getWindowSize() {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    };
}