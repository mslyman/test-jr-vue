import Task1 from './Task1.js';
import Task2 from './Task2.js';

export default {
  name: `App`,
  components: {
    Task1,
    Task2
  },
  template: `
  <div>      
      <task1 class="container1"></task1>        
      <task2 class="container1"></task2>    
  </div>
  `,
};