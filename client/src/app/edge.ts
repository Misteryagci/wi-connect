import { Point } from './point';
export class Edge {
    public src: Point;
    public destination: Point;

    constructor(source: Point, destination: Point) {
        this.src = source;
        this.destination = destination;
    }
}