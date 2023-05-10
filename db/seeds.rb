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

# Liner Notes
liner = Project.create!(
  screenshot:"/images/liner.png",
  title: "Liner Notes",
  description: "Database and note-taking app for artists to keep track of their song and album credits.",
  deploy_link: "https://liner-notes-app.onrender.com/",
  github_link: "https://github.com/derekaraujo19/liner-notes-final",
  demo_link: "https://www.youtube.com/watch?v=W5fqM41CFrk&ab_channel=DerekAraujo",
  tech_used: "React, Ruby on Rails, 'bcrypt' and user authorization")

# BringAJacket
jacket = Project.create!(
  screenshot: "/images/jacket.png",
  title: "Bring-A-Jacket",
  description: "recommends appropriate outerwear based on a user's inputted location.")

# Portfolio
portfolio = Project.create!(
  screenshot: "/images/portfolio.png",
  title: "Personal Portfolio",
  description: "Showcase of software projects and produced music.",
  deploy_link: "https://derek-araujo-app.onrender.com/",
  github_link: "https://github.com/derekaraujo19/derekaraujo_dot_com",
  demo_link: "",
  tech_used: "React, Ruby on Rails"
)

# DiscSnob
discsnob = Project.create!(
  screenshot: "/images/discsnob.png",
  title: "DiscSnob",
  description: "a social hub where users can leave hot takes on their favorite albums."
)