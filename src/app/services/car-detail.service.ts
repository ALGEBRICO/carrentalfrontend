import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
    apiUrl = 'https://localhost:44356/api/';

  constructor(private httpClient: HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>> (newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId 
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getallbycolorid?id="+colorId 
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+ "/cars/getimagesbycarid?id=" +carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


}