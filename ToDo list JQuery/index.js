$(document).ready(function () {
    $(".show").click(() => {
      $(".adding-section").slideToggle();
      $(".newtask").focus();
    });
  
    $(".add").click(() => {
      const task = $(".newtask").val();
      if (task !== "") {
        $(".show").before(`
          <div class="todo-task py-2 border-bottom border-dark border-2">
            <p class="task fs-5 fw-bold m-0">${task}</p>
          </div>`);
        $(".newtask").val("");
        $(".adding-section").slideUp();
      }
    });
  
    $(".todo-body").on("click", ".task", function () {
      $(this).toggleClass("checked");
    });
  
    $(".todo-body").on("dblclick", ".todo-task", function () {
      $(this).remove();
    });
  });
  