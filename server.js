const express = require('express');
const app = express();
const PORT = 3000

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }

  



//<<--- had a , and not a . between app and get..... so anoying when that happens and confused why thing are broken.
app.get('/', (req, res) => {
    res.render('home.ejs', {
        name: RESTAURANT.name ,
        phone : RESTAURANT.phone ,
        add: RESTAURANT.address 

    });
});

app.get ('/menu', (req, res) => {   //renders the menu page
    res.render('menu.ejs', {
        menuItems: RESTAURANT.menu //should put the meun array in a varaible
    });
});

app.get('menu/:category', (re, res) => {
    res.render('category.ejs')
})







app.listen(PORT, () => {
    console.log('Port is listening')
});