import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  
  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []  // Initialize an empty array to hold appointments

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {  // Check if title and date are valid
      // Create a new appointment object
      let newAppointment : Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      // Add the new appointment to the list
      this.appointments.push(newAppointment);
      
      // Clear the input fields
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date(); 

      localStorage.setItem('appointments', JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1)
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }

}