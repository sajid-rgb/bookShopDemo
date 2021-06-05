import images from '../../constants/images'
const affordable = 1
const fairPrice = 2
const expensive = 3
export const restaurantData = [
  {
    id: 1,
    name: "Learn Android",
    rating: 4.8,
    categories: [5, 7],
    priceRating: 1,
    photo: images.android,
    duration: "Justin Schemical",
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
    courier: {
      avatar: images.avatar_1,
      name: "Amy"
    },
    menu: [
      {
        menuId: 1,
        name: "Learn Android",
        photo: images.android,
        description: "Learn and Fun programming",
        calories: 200,
        price: 10
      },
      {
        menuId: 2,
        name: "Crispy",
        photo: images.bolod,
        description: "Learn and Fun programming",
        calories: 250,
        price: 15
      },
      {
        menuId: 3,
        name: "Crispy Baked French Fries",
        photo: images.android,
        description:  "Learn and Fun programming",
        calories: 194,
        price: 8
      }
    ]
  },
  {
    id: 2,
    name: "Habluder Jonno Programming",
    rating: 4.8,
    categories: [2, 4, 6],
    priceRating: expensive,
    photo: images.hablu,
    duration: "Jhankar Mahbub",
    location: {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
    },
    courier: {
      avatar: images.hablu,
      name: "Jackson"
    },
    menu: [
      {
        menuId: 4,
        name: "Habluder Jonno Programming",
        photo: images.hablu,
        description:  "Learn and Fun programming",
        calories: 250,
        price: 15
      },
      {
        menuId: 5,
        name:"Habluder Jonno Programming",
        photo: images.hablu,
        description:  "Learn and Fun programming",
        calories: 250,
        price: 20
      },
      {
        menuId: 6,
        name:"Habluder Jonno Programming",
        photo: images.hablu,
        description:  "Learn and Fun programming",
        calories: 100,
        price: 10
      },
      {
        menuId: 7,
        name:"Habluder Jonno Programming",
        photo: images.hablu,
        description: "Learn and Fun programming",
        calories: 100,
        price: 10
      }
    ]
  },
  {
    id: 3,
    name: "Programming Er Bolo To Hero",
    rating: 4.8,
    categories: [3],
    priceRating: expensive,
    photo: images.bolod,
    duration: "Jhankar Mahbub",
    location: {
      latitude: 1.5238753474714375,
      longitude: 110.34261833833622,
    },
    courier: {
      avatar: images.avatar_3,
      name: "James"
    },
    menu: [
      {
        menuId: 8,
        name: "Programming Er Bolo To Hero",
        photo: images.bolod,
        description:  "Learn and Fun programming",
        calories: 100,
        price: 20
      }
    ]
  },
  {
    id: 4,
    name: "Think Python",
    rating: 4.8,
    categories: [8],
    priceRating: expensive,
    photo: images.think,
    duration: "Erikson",
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: images.avatar_4,
      name: "Ahmad"
    },
    menu: [
      {
        menuId: 9,
        name:  "Think Python",
        photo: images.think,
        description: "Learn and Fun programming",
        calories: 100,
        price: 50
      }
    ]
  },
  {
    id: 5,
    name: "Learn Php",
    rating: 4.8,
    categories: [1, 2],
    priceRating: affordable,
    photo: images.php,
    duration: "Josheph Handerson",
    location: {
      latitude: 1.558050496260768,
      longitude: 110.34743759630511,
    },
    courier: {
      avatar: images.avatar_4,
      name: "Muthu"
    },
    menu: [
      {
        menuId: 10,
        name: "Learn Php",
        photo: images.php,
        description:  "Learn and Fun programming",
        calories: 200,
        price: 5
      },
      {
        menuId: 11,
        name: "Learn Php",
        photo: images.php,
        description:  "Learn and Fun programming",
        calories: 300,
        price: 8
      },
      {
        menuId: 12,
        name: "Learn Php",
        photo: images.php,
        description:  "Learn and Fun programming",
        calories: 300,
        price: 8
      },
      {
        menuId: 13,
        name: "Learn Php",
        photo: images.php,
        description: "A traditional Indian rice dish with mutton",
        calories: 300,
        price: 8
      },

    ]
  },
  {

    id: 6,
    name: "Numpy Array",
    rating: 4.9,
    categories: [9, 10],
    priceRating: affordable,
    photo: images.numpy,
    duration: "James Rodirigues",
    location: {
      latitude: 1.5573478487252896,
      longitude: 110.35568783282145,
    },
    courier: {
      avatar: images.avatar_1,
      name: "Jessie"
    },
    menu: [
      {
        menuId: 12,
        name: "Numpy Array",
        photo: images.numpy,
        description:  "Learn and Fun programming",
        calories: 100,
        price: 2
      },
      {
        menuId: 13,
        name:"Numpy Array",
        photo: images.numpy,
        description: "Learn and Fun programming",
        calories: 100,
        price: 3
      },
      {
        menuId: 14,
        name: "Numpy Array",
        photo: images.numpy,
        description:  "Learn and Fun programming",
        calories: 300,
        price: 20
      }
    ]

  }


]

