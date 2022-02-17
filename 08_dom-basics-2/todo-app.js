(function(){

	//create and return header of app
	function createAppTitle(title) {
		let appTitle = document.createElement('h2');
		appTitle.innerHTML = title;
		return appTitle;
	}

	//create and return form for task
	function createTodoItemForm() {
		let form = document.createElement('form');
		let input = document.createElement('input');
		let buttonWrapper = document.createElement('div');
		let	button = document.createElement('button');

		form.classList.add('input-group', 'mb-3');
		input.classList.add('form-control');
		input.placeholder =  'Введите название нового дела';
		buttonWrapper.classList.add('input-group-append');
		button.classList.add('btn', 'btn-primary');
		button.textContent = 'Добавить дело';
		button.disabled = true;
		
		input.addEventListener('input', function() {
			button.disabled = input.value.length == 0;
		});

		buttonWrapper.append(button);
		form.append(input);
		form.append(buttonWrapper);

		return {
			form,
			input,
			button
		};
	}

	//create and return list of elements
	function createTodoList() {
		let list = document.createElement('ul');
		list.classList.add('list-group');
		return list;
	}

	function createTodoItem(name) {
		let item = document.createElement('li');
		let buttonGroup = document.createElement('div');
		let doneButton = document.createElement('button');
		let deleteButton = document.createElement('button');

		item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
		item.textContent = name;

		buttonGroup.classList.add('btn-group', 'btn-group-sm');
		doneButton.classList.add('btn', 'btn-success');
		doneButton.textContent = 'Готово';
		deleteButton.classList.add('btn', 'btn-danger');
		deleteButton.textContent = 'Удалить';

		buttonGroup.append(doneButton, deleteButton);
		item.append(buttonGroup);

		return {
			item,
			buttonGroup,
			doneButton,
			deleteButton
		};
	}

	function createTodoApp(container, my_key, defaultItems = null, title = 'Мои дела') {

		let	storage;
		let todoAppTitle = createAppTitle(title);
		let todoItemForm = createTodoItemForm();
		let	todoList = createTodoList();

		container.append(todoAppTitle);
		container.append(todoItemForm.form);
		container.append(todoList);

		if (defaultItems) {
			defaultItems.forEach(element => {
				let todoDefItem = createTodoItem(element.name);
				todoDefItem.doneButton.addEventListener('click', function() {
					todoDefItem.item.classList.toggle('list-group-item-success');
				});
				todoDefItem.deleteButton.addEventListener('click', function() {
					if (confirm("Вы уверенны?"))
						todoDefItem.item.remove();
				});
				if (element.done)
					todoDefItem.item.classList.add('list-group-item-success');
				todoList.append(todoDefItem.item);
				todoItemForm.input.value = '';
			});
		}

		if (localStorage.getItem(my_key) == null)
			storage = [];
		else
			storage = JSON.parse(localStorage.getItem(my_key));

		storage.forEach(element => {
			let todoStorageItem = createTodoItem(element.value);
			todoStorageItem.doneButton.addEventListener('click', function() {
				todoStorageItem.item.classList.toggle('list-group-item-success');
				element.status = !element.status;
				localStorage.setItem(my_key, JSON.stringify(storage));
			});
			todoStorageItem.deleteButton.addEventListener('click', function() {
				if (confirm("Вы уверенны?"))
					todoStorageItem.item.remove();
			});
			if (element.status)
				todoStorageItem.item.classList.add('list-group-item-success');
			todoList.append(todoStorageItem.item);
		});

		//	work with submit button 
		todoItemForm.form.addEventListener('submit', function(event){

			event.preventDefault();
			if (!todoItemForm.input.value)
				return;
			
			let todoItem = createTodoItem(todoItemForm.input.value);
			todoItem.doneButton.addEventListener('click', function() {
				todoItem.item.classList.toggle('list-group-item-success');
			});

			todoItem.deleteButton.addEventListener('click', function() {
				if (confirm("Вы уверенны?"))
					todoItem.item.remove();
			});

			todoList.append(todoItem.item);
			
			storage.push({ value: todoItemForm.input.value, status: todoItem.item.classList.contains('list-group-item-success')});
			localStorage.setItem(my_key, JSON.stringify(storage));

			todoItemForm.input.value = '';
		});
	}
	window.createTodoApp = createTodoApp;
})();