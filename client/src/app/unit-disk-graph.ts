import { Edge } from './edge';
import { Point } from './point';

export class UnitDiskGraph {
    public points: Point[];
    public edges: Edge[];

    constructor(p: Point[], e: Edge[]) {
        this.points = p;
        this.edges = e;
    }
}
