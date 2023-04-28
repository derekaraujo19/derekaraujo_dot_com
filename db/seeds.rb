# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.destroy_all

# Projects
puts "Seeding Projects..."

liner = Project.create!(
  screenshot: "",
  title: "Liner Notes",
  description: "Liner Notes is a database and note-taking app for artists to keep track of their song credits and associated albums. Users create accounts to log their artistic work, leave notes for specific songs, and add, edit, or delete any album metadata.",
  deploy_link: "https://liner-notes-app.onrender.com/",
  github_link: "https://github.com/derekaraujo19/liner-notes-final",
  demo_link: "https://www.youtube.com/watch?v=W5fqM41CFrk&ab_channel=DerekAraujo", tech_used: "React, Ruby on Rails, 'bcrypt' and user authorization")

portfolio = Project.create!(
  screenshot: "",
  title: "Personal Portfolio",
  description: "This portfolio showcases my software projects and music production and songwriting credits.",
  deploy_link: "https://derek-araujo-app.onrender.com/",
  github_link: "https://github.com/derekaraujo19/derekaraujo_dot_com",
  demo_link: "",
  tech_used: "React, Ruby on Rails")

# BringAJacket
# DiscSnob