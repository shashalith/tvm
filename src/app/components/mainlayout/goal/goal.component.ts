import { Component } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
goToNewGoal() {
throw new Error('Method not implemented.');
}
  currentView: 'main' | 'goalType' | 'newGoal' = 'main';

  goToGoalType() {
    this.currentView = 'goalType';
  }

  selectPersonalGoal() {
    this.currentView = 'newGoal';
  }

  goClose() {
    if (this.currentView === 'newGoal') {
      this.currentView = 'goalType';
    } else {
      this.currentView = 'main';
    }
  }
    move() {
    this.currentView = 'newGoal'; // switch to new goal form
  }
  submitGoal() {
  alert('Your goal has been submitted successfully!');
  // You can also reset the form or switch view here if needed
}



 goBack() {
    this.currentView = 'goalType'; // switch back to goalType view
  }
}