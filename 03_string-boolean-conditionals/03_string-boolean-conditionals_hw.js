// Задание 1

// let password = "123456789"
// if (password.length >= 4 && (password.includes("-") || password.includes("_"))) {
//     console.log("Пароль надёжный")
// } else {
//     console.log("Пароль недостаточно надёжный")
// }

//Задание 2

let name = "Username"
let surname = "Usersurname"
user_name_flag = false
user_surname_flag = false

name_first_letter = name.substr(0,1)
name_rest_letters = name.substr(1)
name_correct = name_first_letter.toUpperCase() + name_rest_letters.toLowerCase()

surname_first_letter = surname.substr(0,1)
surname_rest_letters = surname.substr(1)
surname_correct = surname_first_letter.toUpperCase() + surname_rest_letters.toLowerCase()

if (name !== name_correct) {
    user_name_flag = true
}

if (surname !== surname_correct) {
    user_surname_flag = true
}

user_message_name = user_name_flag == false ? "Имя осталось без изменений" : "Имя было преобразовано"
user_message_surname = user_surname_flag == false ? "Фамилия осталась без изменений" : "Фамилия была преобразована"
console.log(user_message_name)
console.log(user_message_surname)

