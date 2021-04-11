import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];
  
  currentCar:CarDetail 
  nullCar:CarDetail 
  dataLoaded=false;

  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
    
      }
      else if(params["colorId"])
      {
        this.getCarsByBrand(params["colorId"])
      }
      else{

        this.getCars();
        console.log(this.getCars)
      }
    })
  }

  getCars(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  
  getCarsByColor(colorId:number){
    this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }

  setCurrentCar(car:CarDetail){
    this.currentCar=car;
  }

  getCurrentCarClass(car:CarDetail){
    if(car == this.currentCar){
      return "list-group-item  list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  getAllCarsClass(){
    if(!this.currentCar){
      return "list-group-item list-group-item-secondary"
    }else{
      return "list-group-item"
    }
  }

  resetCurrentCar(){
    this.currentCar=this.nullCar;
  }
}