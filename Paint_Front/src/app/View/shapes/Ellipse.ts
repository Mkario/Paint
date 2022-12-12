import { IShape } from "./IShape";
import Konva from 'konva';

export class Ellipse implements IShape {

	constructor(
		public name: string = 'ellipse',
		public id: number = 0,
		public x: number = 0,
		public y: number = 0,
		public width: number = 1,
		public height: number = 1,
		public points: number[] = [0, 0, 0, 0],
		public rotateAngle: number = 0,
		public strokeWidth: number = 0,
		public borderColor: string = '#000000',
		public fillColor: string = '#FFFFFF00'
	) { }

    konv: any;
    

    draw(): Konva.Ellipse{
        this.konv = new Konva.Ellipse({
			id: String(this.id),
            x: this.x,
            y: this.y,
            radiusX: this.width,
            radiusY: this.height,
            rotation: this.rotateAngle,
            stroke: this.borderColor,
			strokeWidth: this.strokeWidth,
			fill: this.fillColor
		});
		return this.konv;
    }

    continueDraw(width: number, height: number): void {
		this.konv.radiusX(width).radiusY(height);
		this.konv.name(`${width} ${height}`);
	}
}