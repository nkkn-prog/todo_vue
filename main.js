new Vue ({
  el: '#app',
  data: {
    message: 'Hello World',
    newTask: '',
    todo: [
      {todo_name: "Vue.jsを使ってtodoアプリを作成する", isCompleted: false},
      {todo_name: "基本情報技術者試験の練習問題を解く", isCompleted: false},
      {todo_name: "入社先の自己紹介スライド作る", isCompleted: false}
    ]
  },
  methods: {
    addTask: function(){
      if (this.newTask == ''){
        return;
      }
      else {
        this.todo.push({
        todo_name: this.newTask, isCompleted: false
        });
      }
      this.newTask = '';
    },
    deleteTask: function(){
      this.todo.pop();
    }
  }
})