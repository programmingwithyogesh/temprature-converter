import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  celcius: number = 0;
  fahrenheit: number = 0;

  cTof(celcius: number) {
    this.celcius = celcius;
    this.fahrenheit = (this.celcius * 9) / 5 + 32;
    console.log("fo");
  }

  fToc(fahrenheit: number) {
    this.fahrenheit = fahrenheit;
    this.celcius = ((this.fahrenheit - 32) * 5) / 9;
  }

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32

    this.cTof(0);
  }
}
