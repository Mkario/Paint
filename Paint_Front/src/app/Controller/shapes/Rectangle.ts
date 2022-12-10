import { IShape } from "./IShape";
import Konva from 'konva';

export class Rectangle implements IShape {

	constructor(
		public id: number = 0,
		public x: number = 0,
		public y: number = 0,
		public width: number = 0,
		public height: number = 0,
		public rotateAngle: number = 0,
		public strokeWidth: number = 0,
		public borderColor: string = "#000000FF",
		public fillColor: string = "#FFFFFF00"
	) { }

	konv: any;
    
	draw(): Konva.Rect {
		this.konv = new Konva.Rect({
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
			setRotation: this.rotateAngle,
			stroke: this.borderColor,
			//strokeWidth: this.strokeWidth,
			fill: this.fillColor,
			draggable: true
		});
		return this.konv;
	}

	continueDraw(width: number, height: number): void {
		this.konv.width(width).height(height);
	}

}