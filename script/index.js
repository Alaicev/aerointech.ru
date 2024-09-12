const carusel = document.querySelectorAll('.course__carusel-container')
const progress = document.querySelector('.course__carusel-progress')
const animation = document.querySelector('.course__carusel-progress-active')
const buttonCourse = document.querySelectorAll('.course__carusel-button')
const caruselBlock = document.querySelector('.course__carusel-block')
const allBlockInfo = document.querySelectorAll('.course__offer-item')
const allSections = document.querySelectorAll('.nav')
const allLinks = document.querySelectorAll('.navigation__item')
const hamburger = document.querySelector(".hamb-cintainer")


allLinks.forEach((el, i) => {
  el.addEventListener("click", () => {
    allSections[i].scrollIntoView() 
    document.querySelector(".hamb").classList.remove("hamb-active")
    document.querySelector("html").classList.remove("bodyBlock")
  document.querySelector(".navigation__items").classList.remove("navigation__items-hamb")
  })
})

window.addEventListener('scroll', function() {
  if(window.pageYOffset >= 100) {
    document.querySelector(".header").classList.add('header__to-scroll')
  }
  else {
    document.querySelector(".header").classList.remove('header__to-scroll')
  }
})

hamburger. onclick = () => {
  document.querySelector(".hamb").classList.toggle("hamb-active")
  document.querySelector("html").classList.toggle("bodyBlock")
  document.querySelector(".navigation__items").classList.toggle("navigation__items-hamb")
}

const imageToCarusel = [
'./assets/img/photo-1.jpg',
'./assets/img/photo-2.jpg',
'./assets/img/photo-3.jpg',
'./assets/img/photo-4.jpg',
'./assets/img/photo-5.jpg',
'./assets/img/photo-6.jpg',
'./assets/img/photo-7.jpg',
'./assets/img/photo-8.jpg',
'./assets/img/photo-9.jpg',
'./assets/img/photo-10.jpg',
'./assets/img/photo-11.jpg',
]

let index = 1

function buttonDis (i) {
  if (i === true) {
    buttonCourse[0].disabled = true
    buttonCourse[1].disabled = true
  } else {
    buttonCourse[0].disabled = false 
    buttonCourse[1].disabled = false
  }
}

carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`

buttonCourse.forEach((el, i) => {
  el.addEventListener('click', () => {
    buttonDis(true)
    if(i === 0) {
      index = index -1;
      index = index < 0 ? imageToCarusel.length -1 : index 
      carusel[0].style.backgroundImage = `url(${imageToCarusel[index]})`
      caruselBlock.style.transition = 'all 1s'
      caruselBlock.style.left = '0%'
      setTimeout(() => {
      caruselBlock.style.transition = 'none'
      caruselBlock.style.left = '-100%'
        carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`
        buttonDis(false)
      },1000)
    } else if(i === 1) {
      index = index + 1;
      index = index >= imageToCarusel.length ? 0 : index 
      carusel[2].style.backgroundImage = `url(${imageToCarusel[index]})`
      caruselBlock.style.transition = 'all 1s'
      caruselBlock.style.left = '-200%'
      setTimeout(() => {
      caruselBlock.style.transition = 'none'
      caruselBlock.style.left = '-100%'
        carusel[1].style.backgroundImage = `url(${imageToCarusel[index]})`
        buttonDis(false)
      },1000)
    }
  })
})

const textForInfo = [
  "Обучающие могут открывать курсы с любых устройств: телефонов, планшетов и ноутбуков. Студенты проходят тесты и повторяют пройденный материал в любое удобное время. Платформа помогает проводить обучение в режиме VR и 360 для ветеринарии и агрономии. Тестирование происходит с помощью интерактивных тестов и опросов. Присутствует перевод текста в живую речь. Курсы работают в системах обучения с поддержкой SCORM/AICC/xAPI/cmi5.", 
  "VR — сокращение от Virtual Reality, что переводится как «виртуальная реальность». Эта технология позволяет погрузить пользователя в виртуальный мир, который трудно отличить от реальности. Контроллеры помогают управлять приложением, а камеры служат дополнительным источником ввода и средством безопасности. Реализовано для шлема виртуальной реальности HTC Vive и Oculus Quest 2", 
  "Использование технологических карт в электронном формате. Обучение студентов правильного заполнения клинического исследования животных в электронном формате. Мобильное приложение паспорта полевых опытов, протоколы научных исследований в агрономии."
  ]

allBlockInfo.forEach((el, i) => {
  el.addEventListener("click", () => {
    document.querySelector('.block-info__text').innerHTML = textForInfo[i]
    document.querySelector('.block-info').style.zIndex = 33
    document.querySelector('.block-info').style.opacity = 1
    document.querySelector('.block-info__container').style.transform = 'scale(1)'
    document.querySelector('html').style.overflow = 'hidden'
  })
})

document.querySelector('.block-info__button-close').addEventListener("click", () => {
  document.querySelector('.block-info').style.zIndex = -2
  document.querySelector('.block-info').style.opacity = 0
  document.querySelector('.block-info__container').style.transform = 'scale(0)'
  document.querySelector('html').style.overflow = 'auto'
})

