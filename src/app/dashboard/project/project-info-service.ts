/**
 * Created by yugandhar.ds on 3/23/2017.
 */

import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map'

@Injectable()
export class ProjectInfoService {
  constructor(private http:Http) {
  }

  getProjetInfo(projectId:any):Observable<any> {
    return this.http.get("../app/data/" +projectId +".json")
      .map((responseData:Response) => {
        return responseData.json();
      });
  }
}

