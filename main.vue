<template>
  <h1>リロードすると入力したタスクが消えるアプリ</h1>
  <hr>
  <div id="app">
    <input style="width:250px; height:100%;" type="text" v-model="newTask" placeholder="ここにタスクを入力してください。" >
    <button @click="addTask">追加する</button>
      <ul>
          <div v-for="task in todo">
            <li>
              <p>タスク名:{{task.todo_name}}  完了したかどうか:{{task.isCompleted}}</p>
            </li>
          </div>
      </ul>
  </div>
</template>

<script>
  export default{
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
      }

    }
  }
</script>
<style>
</style>