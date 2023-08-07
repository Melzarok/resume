// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Якась адреса 44',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-tes',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    salary: '600$ в місяць',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
      experience in development. Whenever I start to
      work on a new project I learn the domain and try
      to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
        adb: 'aBa',
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 9,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 7,
        },
        {
          name: 'VS code & NPM',
          point: 7.5,
        },
        {
          name: 'Git & Terminal',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Малювання',
          isMain: false,
        },
        {
          name: 'Автомобілі',
          isMain: true,
        },
        {
          name: 'Програмування',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Каразіно',
          isEnd: true,
        },
        {
          name: 'Ліцей №127',
          isEnd: true,
        },
        {
          name: 'Гумназія №114',
          isEnd: false,
        },
        {
          name: 'Гумназія №99',
          isEnd: false,
        },
        {
          name: 'Гумназія №102',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'Mono-bank',
          id: 21,
        },
        {
          name: 'Privat24',
          id: 32,
        },
        {
          name: 'Пумб',
          id: 43,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,

          project: [
            {
              name: 'Resume',
              about: 'Random text in about',
              url: 'https.//it-brains.com.ua',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Random text in awards',
                },
                {
                  name: 'Random text in awards 2',
                },
              ],
              stackAmount: 3,
              awardAmount: 7,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
