var app = new Vue({
	el: '#todo',
	data: {
		todos: [
			{ checked: false, text: 'Get milk', timestamp: 1504662710 },
			{ checked: false, text: 'Clean my room', timestamp: 1504576310 }
		],
		newTask: '',
		completed: 0
	},
	methods: {
		createTask: function() {
			if (app.newTask.trim() != '') {
				app.todos.push({checked: false, text: app.newTask, timestamp: Date.now() });
				app.newTask = '';
			}
		},
		removeTask: function(index) {
  			app.todos.splice(index, 1);
  		},
  		updateCompleted: function(index) {
  			if(app.todos[index].checked){
  				app.completed++;
  			} else {
  				app.completed--;
  			}
  		}
	}

})