import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PointService {

  constructor(private http: HttpClient) { }

  private testUrl = '/test';

  testService(maxWidth: number, maxHeight: number, radius: number, nbPoints: number) {
    const params = {
      'maxWidth': Math.round(maxWidth),
      'maxHeight': Math.round(maxHeight),
      'radius': Math.round(radius),
      'nbPoints': nbPoints
    };
    console.log('Les params ' + JSON.stringify(params));
    return this.http.post(this.testUrl, params);
  }

}
