const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')

let restaurants = [{id: 1
                    ,name_en: 'Je Khai Seafood'
                    ,name_th: 'เจ๊ไข่ซีฟู้ด'
                    ,address:'1300/3 Soi Prachachuen 37 - Prachachuen 38, the entrance of Prachachuen Police Station, Prachachuen Road, Bang Sue Subdistrict, Bang Sue District., Bangkok, Thailand'
                    ,hours:'16:00-00:00'
                    ,tel:'02-585-3641'
                    ,cuisines:'Seafood, Thai'
                    ,meals:'Dinner'
                    ,features:'Takeout, Reservations'
                    ,image: 'https://cdn.herenow.city/assets/uploads/sites/8/2017/05/02182122/re_JKhai__DSC2207-765x510.jpg'
                    ,instagram:'https://instagram.com/jkhai_'
                    ,facebook:'https://www.facebook.com/Jkhaiseafood/'
                },

                {id: 2
                    ,name_en: 'Vises Kaiyang Restaurant'
                    ,name_th: 'วิเศษไก่ย่างภัตตาคาร'
                    ,address:'309 Yak Bang Pho, Pracharat Sai 1 Road, Bang Sue Subdistrict, Bang Sue District, Bangkok, Thailand'
                    ,hours:'09.00-22.00'
                    ,tel:'0-2912-4162'
                    ,cuisines:'Food, Thai'
                    ,meals:''
                    ,features:''
                    ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WdmWFvBdsx9fWf8CjWb8bd3X3rQyduucX4LXD-dilY0YwW8uIQ'
                    ,instagram:''
                    ,facebook:''
                },

                {id: 3
                    ,name_en: 'Garlic Restaurant'
                    ,name_th: 'ร้านอาหารกาลิค'
                    ,address:'44 Soi Chotiwat, Klong Prapa, Saphan 99, Prachachuen Road, Bang Sue Subdistrict, Bang Sue District., Bangkok, Thailand'
                    ,hours:'16:00-00:00'
                    ,tel:'02-585-1932'
                    ,cuisines:'Thaifood'
                    ,meals:''
                    ,features:'Reservations'
                    ,image: ''
                    ,instagram:''
                    ,facebook:''
                },

                {id: 4
                    ,name_en: 'Amazon Cafe'
                    ,name_th: 'คาเฟ่ อเมซอน'
                    ,address:'Prachachuen Rd., Bang Sue Sub-District, Bang Sue District, Bangkok, Thailand'
                    ,hours:'16:00-00:00'
                    ,tel:'02-966-8199'
                    ,cuisines:'Cafe'
                    ,meals:''
                    ,features:''
                    ,image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/a0/7a/74/counter-and-prices.jpg'
                    ,instagram:''
                    ,facebook:''
                },

                {id: 5
                    ,name_en: 'Oyua River Terrace restaurant'
                    ,name_th: 'โอยั๊วะ รีเวอร์เทอเรส'
                    ,address:'1353 Under Rama 7 Bridge, Bangkok side, Khlong Prapa (the right side) Road, Bang Sue Subdistrict, Bang Sue District., Bangkok, Thailand'
                    ,hours:'11:00-23:30'
                    ,tel:'02-556-0784'
                    ,cuisines:'Thaifood, Thai'
                    ,meals:'Dinner'
                    ,features:''
                    ,image: 'https://cdn3.th.orstatic.com/userphoto/photo/0/B5/0027DI74D82358D85181B8px.jpg'
                    ,instagram:''
                    ,facebook:''
                },

                {id: 6
                    ,name_en: 'Siam Charming'
                    ,name_th: 'สยาม ชาร์มมิ่ง'
                    ,address:'1410/8, Soi Pracha Cheun 46, Bangkok 10800, Thailand'
                    ,hours:'11:00-22:00'
                    ,tel:'02-048-4188'
                    ,cuisines:'Thai'
                    ,meals:''
                    ,features:''
                    ,image: 'https://roofexpert.scgbuildingmaterials.com/uploads/20190218/eef7a80d9fd0b75e597a310e4609319a.jpg'
                    ,instagram:'https://instagram.com/siam_charming'
                    ,facebook:'https://www.facebook.com/Siamcharmingrestaurant/'
                },

                {id: 7
                    ,name_en: 'Bella Casa'
                    ,name_th: 'เบลล่าคาซ่า'
                    ,address:'9/11, Ratchadamri Rd., Bangkok 10800, Thailand'
                    ,hours:'11:00-22:00'
                    ,tel:'02-585-8767                    '
                    ,cuisines:'Italian, Japanese, Thai'
                    ,meals:'Lunch, Dinner'
                    ,features:''
                    ,image: 'https://s.isanook.com/tr/0/ud/185/925470/bg_bellacasa_15.jpg'
                    ,instagram:'https://www.facebook.com/Bellacasabkk'
                    ,facebook:'https://instagram.com/Thepantrybyps'
                },

                {id: 8
                    ,name_en: 'Mu Krob Nai Sai'
                    ,name_th: 'หมูกรอบนายไซ'
                    ,address:'1059 Soi Prachachuen 33 - Prachachuen 34, Prachachuen Road, Bang Sue Subdistrict, Bang Sue District., Bangkok, Thailand'
                    ,hours:'08:00-15:00'
                    ,tel:'02-585-5630'
                    ,cuisines:'Thai'
                    ,meals:''
                    ,features:''
                    ,image: 'http://img.painaidii.com/images/20111121_3_1321861488_739319.jpg'
                    ,instagram:''
                    ,facebook:''
                },

                {id: 9
                    ,name_en: 'Pacata'
                    ,name_th: ''
                    ,address:'Kao San | Next to Rikka hotel, near the Buddy complex, Bangkok, Thailand'
                    ,hours:'16:00-00:00'
                    ,tel:''
                    ,cuisines:'Japanese, International'
                    ,meals:'Lunch, Dinner'
                    ,features:''
                    ,image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/4c/da/9c/pacata.jpg'
                    ,instagram:''
                    ,facebook:''
                },

                {id: 10
                    ,name_en: 'The Foodie'
                    ,name_th: 'ร้านเดอะฟู๊ดดี้'
                    ,address:'83/6 Soi Moo Ban Cement Thai, Pracha Chuen Rd., Bangkok, Thailand'
                    ,hours:'11:00-21:30'
                    ,tel:'02-911-0149-50'
                    ,cuisines:'Asian, Thai'
                    ,meals:'Lunch, Dinner'
                    ,features:'Reservations, Seating, Table Service'
                    ,image: 'https://img.wongnai.com/p/1600x0/2019/03/24/0aafffeeba104e1daf745549e72b5a96.jpg'
                    ,instagram:'https://instagram.com/thefoodiebykannicha'
                    ,facebook:'https://www.facebook.com/thefoodiebykannicha'
                },
   
]

app.use(cors())
app.use('/api/restaurants', bodyParser.json() ,router)
app.use('/api/restaurants', bodyParser.urlencoded({extended:false}) ,router)

router.route('/bangsue')
    .get( (req, res) =>  res.json(restaurants) )

    // insert a new restaurant
    .post( (req, res)=> {
        let restaurant = {};
        restaurant.id =   restaurants[restaurants.length-1].id +1  ;
        restaurant.name_en = req.body.name_en
        restaurant.name_th = req.body.name_th
        restaurant.address = req.body.address
        restaurant.hours = req.body.hours
        restaurant.tel = req.body.tel
        restaurant.cuisines = req.body.cuisines
        restaurant.meals = req.body.meals
        restaurant.features = req.body.features
        restaurant.image = req.body.image
        restaurant.instagram = req.body.instagram
        restaurant.facebook = req.body.facebook
        restaurants.push(restaurant);
        res.json( {message: 'restaurant created!'} )
    })


router.route('/restaurants/:restaurant_id')
    .get ( (req,res) => {
        let id = restaurants.findIndex( (restaurant) => restaurant.id === +req.params.restaurant_id)
        res.json(restaurants[id])
    })  // get a restaurant

    .put ( (req,res) => {                               // Update a restaurant
        // var id = req.params.restaurant_id
        let id = restaurants.findIndex( (restaurant) => restaurant.id === +req.params.restaurant_id)
        restaurants[id].name_en = req.body.name_en;
        restaurants[id].name_th = req.body.name_th;
        restaurants[id].address = req.body.address;
        restaurants[id].hours = req.body.hours;
        restaurants[id].tel = req.body.tel;
        restaurants[id].cuisines = req.body.cuisines;
        restaurants[id].meals = req.body.meals;
        restaurants[id].features = req.body.features;
        restaurants[id].image = req.body.image;
        restaurants[id].instagram = req.body.instagram;
        restaurants[id].facebook = req.body.facebook;
        res.json({ message: 'restaurant updated!' + req.params.restaurant_id});
    })

    .delete ( (req,res) => {                   // Delete a restaurant
        // delete     restaurants[req.params.restaurant_id]
        restaurants = restaurants.filter( (restaurant) => restaurant.id !== +req.params.restaurant_id )
        res.json({ message: 'restaurant deleted: ' + req.params.restaurant_id});
    })

app.listen(8000, () => console.log('server ready'))