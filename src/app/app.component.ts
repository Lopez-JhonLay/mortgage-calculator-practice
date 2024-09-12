import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  purchasePrice = 0;
  downPayment = 0;
  repayTime = 1;
  interestRate = 0;

  estimatedMonthlyPayment = 0;

  getMortgage() {
    const principal = this.purchasePrice - this.downPayment;
    const monthlyInterestRate = this.interestRate / 100 / 12;
    const totalPayments = this.repayTime * 12;
  
    if (monthlyInterestRate === 0) {
      this.estimatedMonthlyPayment = principal / totalPayments;
    } else {
      this.estimatedMonthlyPayment =
        principal *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    }
  }
}
