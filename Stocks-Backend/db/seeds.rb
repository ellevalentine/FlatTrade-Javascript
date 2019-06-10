# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Like.destroy_all
Comment.destroy_all

Like.create(likecount: 1)

# Comment.create( name: 'Elle Valentine', comment: "Hellooooooooooo, hihi this is a test comment.")
# Comment.create( name: 'Hannah Port', comment: "Heyyyyyy, hihih this is a test comment.")