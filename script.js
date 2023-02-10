const $form = document.querySelector("form")

const $message_element = document.querySelector(".message")

const error_name_message = "Digite seu nome!"
const error_email_message = "Digite seu e-mail!"
const success_message = "Usuário adicionado com sucesso!"

const $users_list = document.querySelector(".users-list")

$form.addEventListener("submit", (event) => {
  event.preventDefault()

  const $name_element = event.target[0]
  const $email_element = event.target[1]

  const error_name_condition = $name_element.value.length === 0
  const error_email_condition = $email_element.value.length === 0

  if (error_name_condition) {
    message_style($message_element, true)
    $message_element.innerHTML = error_name_message
    $name_element.focus()
  } else if (error_email_condition) {
    message_style($message_element, true)
    $message_element.innerHTML = error_email_message
    $email_element.focus()
  } else {
    message_style($message_element, false)
    $message_element.innerHTML = success_message
    final_process($message_element, $name_element, $email_element)
  }
})

function message_style(element, isError) {
  element.style.color = "#fff"
  if (isError === true) {
    element.style.backgroundColor = "#f00"
  } else {
    element.style.backgroundColor = "#0f0"
  }
}

function final_process(message, name, email) {
  message_reset(message)
  $users_list.insertAdjacentHTML(
    "beforebegin",
    create_user(name.value, email.value)
  )
  form.reset()
}

function message_reset(element) {
  setTimeout(() => {
    element.innerHTML = "Digite todos os seus dados de usuário."
    element.style.color = "#000"
    element.style.backgroundColor = "transparent"
  }, 5000)
}

function create_user(name, email) {
  return `
  <li class="text-xl my-5">
    <span class="name cursor-pointer">${name}</span>, 
    <span class="email cursor-pointer">${email}<span>
  </li>
  `
}
