import { Observable } from '../observable.js';
export declare function concat<A, B>(a: Observable<A>, b: Observable<B>): Observable<A | B>;
export declare function concat<A, B, C>(a: Observable<A>, b: Observable<B>, c: Observable<C>): Observable<A | B | C>;
export declare function concat<A, B, C, D>(a: Observable<A>, b: Observable<B>, c: Observable<C>, d: Observable<D>): Observable<A | B | C | D>;
export declare function concat<A, B, C, D, E>(a: Observable<A>, b: Observable<B>, c: Observable<C>, d: Observable<D>, e: Observable<E>): Observable<A | B | C | D | E>;
//# sourceMappingURL=concat.d.ts.map