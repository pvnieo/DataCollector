import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }
  
  // Get a kind
  getCollectedData(kind){
    return this._http.get('/api/data/' + kind)
            .toPromise()
            .then(res => res.json().data);
  }

  // Delete an entity by kind and id
  deleteEntity(kind, id){
    return this._http.delete('/api/data/' + kind + '&' + id);

  }

}
