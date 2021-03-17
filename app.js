new Vue({
    el: '#app',
    data: {
        title: 'My first work app',
        newTodo: { Name: '', Status: false },
        todos: [
            { Id: 1, Name: 'Read books', Status: false },
            { Id: 2, Name: 'Learn programming', Status: false },
            { Id: 3, Name: 'Do laundry', Status: true },
            { Id: 4, Name: 'Netflix & chill', Status: true }
        ],
        done: { Name: '', Status: false },
        tobeDone: { Name: '', Status: false },
        selectedItem: {}
    },
    methods: {
        AddTodo: function () {
            this.todos.push(this.newTodo);
            this.newTodo = {};
        },
        DeleteItem: function (todo) {
            const index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        // functia nu mai este valabila
        //AllDone: function() {
        //  this.todos.forEach((todo) => {
        //    todo.Status = true;
        //  });
        //},
        //EditItem: function (todo) {
        //    this.newTodo = todo;
        //},
        ChangeStatus: function (todo) {
            if (todo.Status == true) {
                todo.Status = false;
            }
            else {
                todo.Status = true;
            }
        }
    }
})

function CreateGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}
