function TodoItem1() {
    let todoName = 'Learn Frontend';
    let todoDate = '1/10/2025';

    return <div class="container">
       <div class="row todo-row">
         <div class="col-6">
           {todoName}
         </div>
         <div class="col-4">
            {todoDate}
         </div>
         <div class="col-2">
          <button class="btn btn-danger to-btn">Delete</button>
         </div>
      </div>
    </div>
}
export default TodoItem1;