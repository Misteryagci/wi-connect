import { Line } from './line';
import { Point } from './point';

export class Utils {

    public static generateRandomPoint(rangeX: number,rangeY :number): Point {
        return new Point(Math.random() * rangeX + 10, Math.random() * rangeY + 10);
    }


    public static generatePointSet(nbPoints: number, rangeX: number, rangeY: number): Point[] {
        const res: Point[] = new Array<Point>();
        for (let i = 0; i < nbPoints; i++) {
            res.push(this.generateRandomPoint(rangeX,rangeY));
        }
        return res;
    }

    public static generateRandomLines(plist: Point[]): Line[] {
        const lines: Line[] = new Array<Line>();
        for (let i = 0;i<10;i++) {
            const p1 = plist[Math.floor(Math.random()*plist.length)];
            const p2 = plist[Math.floor(Math.random()*plist.length)];
            const line = new Line(p1,p2);
            lines.push(line);
        }
        return lines;
    }
}
