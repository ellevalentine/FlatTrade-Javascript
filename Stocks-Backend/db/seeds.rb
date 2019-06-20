# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Like.destroy_all
Comment.destroy_all
User.destroy_all
Stock.destroy_all

Like.create(likecount: 1)

# # 3= Stock.create(name:"stock3",price: "0", user_id: 1)
# 4= Stock.create(name:"stock1",price: "0", user_id: 1)
# 2= Stock.create(name:"stock2",price: "0", user_id: 1)
# 5= Stock.create(name:"stock2",price: "0", user_id: 1)
# 6= Stock.create(name:"stock3",price: "0", user_id: 1)
# 7= Stock.create(name:"stock1",price: "0", user_id: 1), user_id: 1
# 8= Stock.create(name:"stock2",price: "0", user_id: 1)
# 9= Stock.create(name:"stock3",price: "0", user_id: 1)
# 10= Stock.create(name:"stock1",price: "0", user_id: 1)
# 11= Stock.create(name:"stock2",price: "0", user_id: 1)
# 12= Stock.create(name:"stock3",price: "0", user_id: 1)
# 13= Stock.create(name:"stock1",price: "0", user_id: 1)
# 14= Stock.create(name:"stock2",price: "0", user_id: 1)
# 15= Stock.create(name:"stock3",price: "0", user_id: 1)
# 16= Stock.create(name:"stock1",price: "0", user_id: 1)
# 17= Stock.create(name:"stock2",price: "0", user_id: 1)
# 18= Stock.create(name:"stock3",price: "0", user_id: 1)
# 19= Stock.create(name:"stock1",price: "0", user_id: 1)
# 20= Stock.create(name:"stock2",price: "0", user_id: 1)
# 21= Stock.create(name:"stock3",price: "0", user_id: 1)
# 22= Stock.create(name:"stock1",price: "0", user_id: 1)
# 23= Stock.create(name:"stock2",price: "0", user_id: 1)
# 24= Stock.create(name:"stock3",price: "0", user_id: 1)
# 25= Stock.create(name:"stock1",price: "0", user_id: 1)
# 26= Stock.create(name:"stock2",price: "0", user_id: 1)
# 27= Stock.create(name:"stock3",price: "0", user_id: 1)
# 28= Stock.create(name:"stock1",price: "0", user_id: 1)
# 29= Stock.create(name:"stock2",price: "0", user_id: 1)
# 30= Stock.create(name:"stock3",price: "0", user_id: 1)
# 31= Stock.create(name:"stock1",price: "0", user_id: 1)
# 32= Stock.create(name:"stock2",price: "0", user_id: 1)
# 33= Stock.create(name:"stock3",price: "0", user_id: 1)
# 34= Stock.create(name:"stock1",price: "0", user_id: 1)
# 35= Stock.create(name:"stock2",price: "0", user_id: 1)
# 36= Stock.create(name:"stock3",price: "0", user_id: 1)
# 37= Stock.create(name:"stock1",price: "0", user_id: 1)
# 38= Stock.create(name:"stock2",price: "0", user_id: 1)
# 39= Stock.create(name:"stock3",price: "0", user_id: 1)
# 40= Stock.create(name:"stock1",price: "0", user_id: 1)
# 41= Stock.create(name:"stock2",price: "0", user_id: 1)
# 42= Stock.create(name:"stock3",price: "0", user_id: 1)
# 43= Stock.create(name:"stock1",price: "0", user_id: 1)
# 44= Stock.create(name:"stock2",price: "0", user_id: 1)
# 45= Stock.create(name:"stock3",price: "0", user_id: 1)
# 46= Stock.create(name:"stock1",price: "0", user_id: 1)
# 47= Stock.create(name:"stock2",price: "0", user_id: 1)
# 48= Stock.create(name:"stock3",price: "0", user_id: 1)
# 49= Stock.create(name:"stock1",price: "0", user_id: 1)
# 50= Stock.create(name:"stock2",price: "0", user_id: 1)
# 51= Stock.create(name:"stock3",price: "0", user_id: 1)



# User.create(name: "Elle Valentine", profit: 0, img_url: "https://media.licdn.com/dms/image/C5603AQGpjAuDAMn0Aw/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=ikAn5KxiMRy1nL-StEEj9VBaDY2QPrCfYVH-mUeQPxo")
# User.create(name: "Melissa Simpson", profit: 0, img_url: "https://pbs.twimg.com/profile_images/734446712069066753/nTpvCmZI.jpg")
# User.create(name: "James Gow", profit: 0, img_url: "https://pbs.twimg.com/profile_images/752751754828247041/piJZekHo_400x400.jpg")
# User.create(name: "Anna-Melissa Bishop", profit: 0, img_url: "data:image/jpeg;base64,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")
# User.create(name: "Ellie Hunt", profit: 0, img_url: "https://media.licdn.com/dms/image/C5603AQEBbvo1rxcuFw/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=ijKE3aN_sNwtPfhoB4DYjv_X_0ya4v3_-3dqjKmlUB0")
# User.create(name: "Amadea Mckenzie", profit: 0, img_url: "https://www.mvision.com/files/cache/7584c71bd8dac8af5ac7723bdc9da40b_f1827.jpg")


# Comment.create( name: 'Elle Valentine', comment: "Hellooooooooooo, hihi this is a test comment.")
# Comment.create( name: 'Hannah Port', comment: "Heyyyyyy, hihih this is a test comment.")