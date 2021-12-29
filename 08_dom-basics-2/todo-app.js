(function() {
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return (appTitle);
    }

    //создаем и возвращаем форму для создания дела
    function createTodoItemForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        button.disabled = true;

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        //проверка введено ли что-то в поле
        input.addEventListener('input', function (e){
			button.disabled = input.value.length === 0;
      });

        return {
            form,
            input,
            buttonWrapper,
            button
        };
    }

    //создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return (list);
    }

    //создаем элемент для списка дел
    function createTodoItem(name) {
      let item = document.createElement('li');

      //кнопки для элемента
      let buttonGroup = document.createElement('div');
      let doneButton = document.createElement('button');
      let deleteButton = document.createElement('button');

      //стили для элементов листа + flex
      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.textContent = name;
      buttonGroup.classList.add('btn-group', 'btn-group-sm');
      doneButton.classList.add('btn', 'btn-success');
      doneButton.textContent = 'Готово';
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.textContent = 'Удалить';
      //вкладываем кнопки в отдельный элемент, чтобы объединить их в один блок
      buttonGroup.append(doneButton);
      buttonGroup.append(deleteButton);
      item.append(buttonGroup);

      return {
        item,
        deleteButton,
        doneButton
      };
    }

    function createTodoApp(container, title = 'Список дел', todoItemsDefault, key){

      let todoAppTitle = createAppTitle(title);
      let todoItemForm = createTodoItemForm();
      let todoList = createTodoList();

	  if (localStorage.getItem(key) !== null) {
        let todoItem = createTodoItem(JSON.parse(localStorage.getItem(key)))
        todoList.append(todoItem)
        todoItem.doneButton.addEventListener('click', function(){
            todoItem.item.classList.toggle('list-group-item-success')
        })
        todoItem.deleteButton.addEventListener('click', function(){
            if(confirm('Вы уверены?')){
                todoItem.item.remove()
            }
        })
	}
	if(todoItemsDefault){
		todoItemsDefault.map(item=>{
			let todoItem = createTodoItem(item.name)
			todoList.append(todoItem.item)
			todoItem.doneButton.addEventListener('click', function(){
			   todoItem.item.classList.toggle('list-group-item-success')
		   })
		   todoItem.deleteButton.addEventListener('click', function(){
			   if(confirm('Вы уверены?')){
				   todoItem.item.remove()
			   }
		   })
			if(item.done){
				todoItem.item.classList.add('list-group-item-success')
			}
		})
	 }

      container.append(todoAppTitle);
      container.append(todoItemForm.form);
      container.append(todoList);

      //браузер создает событие submit на форме по нажатию enter или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', function (e){
        //предотвращаем стандартное действие браузера (отмен перезагрузки страницы при нажатие на кнопку)
        e.preventDefault();
        //игнорируем создание пустого элемента списка
        if (!todoItemForm.input.value){
          return;
        }

        let todoItem = createTodoItem(todoItemForm.input.value);

        //обработчики событий для кнопок готово и удалить
        todoItem.doneButton.addEventListener('click', function (){
          todoItem.item.classList.toggle('list-group-item-success');
        });

        todoItem.deleteButton.addEventListener('click', function (){
          if (confirm('Вы уверены?'))
            todoItem.item.remove();
        });

        //создаем и добваляем дело в список
        todoList.append(todoItem.item);

        //обнуляем поле ввода
        todoItemForm.input.value = '';
        //блокируем кнопку для последующей проверки
        todoItemForm.button.disabled = true;

      });
    }

    window.createTodoApp = createTodoApp;
})();
