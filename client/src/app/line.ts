import { Point } from './point';

export class Line {
    public p1: Point;
    public p2: Point;

    constructor(p1: Point, p2: Point) {
        this.p1 = p1;
        this.p2 = p2;
    }

    getX1():number {
        return this.p1.getX();
    }
}
