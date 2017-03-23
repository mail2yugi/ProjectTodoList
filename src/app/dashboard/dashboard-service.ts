/**
 * Created by yugandhar.ds on 3/22/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map'

@Injectable()
export class DashboardService {
  constructor(private http:Http) {
  }

  getProjectList():Observable<any> {
    return this.http.get("../app/data/projectList.json")
      .map((responseData:Response) => {
        return responseData.json();
      });
  }
}

