export class Point {
    public x: number;
    public y: number;
    public color: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distance(p: Point): number {
        return Math.sqrt(Math.pow((p.x - this.x), 2) + Math.pow((p.y - this.y), 2));
    }

    public getX():number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public equals(p: Point): boolean {
        return ((p.x === this.x) && (p.y === this.y));
    }

}
