# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


Project.destroy_all
# Song.destroy_all

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
  tech_used: "React, Ruby on Rails, CSS, Postgresql, 'bcrypt' and user authorization")
# BringAJacket
jacket = Project.create!(
  screenshot: "/images/jacket.png",
  title: "Bring-A-Jacket",
  description: "Recommends appropriate outerwear based on a user's inputted location.",
  github_link: "https://github.com/derekaraujo19/phase-1-final-project",
  demo_link: "https://www.youtube.com/watch?v=h0vNCYXRKh8&ab_channel=DerekAraujo",
  tech_used: "JavaScript, CSS, API Requests, Geolocation")
# Portfolio
portfolio = Project.create!(
  screenshot: "/images/portfolio.png",
  title: "Personal Portfolio",
  description: "Showcase of software projects and produced music.",
  deploy_link: "https://derek-araujo-app.onrender.com/",
  github_link: "https://github.com/derekaraujo19/derekaraujo_dot_com",
  demo_link: "",
  tech_used: "React, Ruby on Rails, CSS, Bootstrap (for grid layout)"
)
# DiscSnob
discsnob = Project.create!(
  screenshot: "/images/discsnob.png",
  title: "DiscSnob",
  description: "A social hub where users can leave hot takes on their favorite albums.",
  github_link: "https://github.com/derekaraujo19/phase-4-final-project",
  demo_link: "https://www.youtube.com/watch?v=FaSTDTUC6n8&t=1s&ab_channel=DerekAraujo",
  tech_used: "React, Ruby on Rails, CSS, user authentication & authorization"
)

# # Songs
# puts "Seeding Songs..."

# road = Song.create!(
#   title: "Here at the End of the Road",
#   year: "2019",
#   artist: "Strangethings",
#   credits: "artist--producer--writer",
#   spotify_link: "https://open.spotify.com/embed/track/4w3gBqDqAGSwhStg1mElCq?utm_source=generator&theme=0"
# )

# things = Song.create!(
#   title: "Strange Things (Are Happening to Me)",
#   year: "2015",
#   artist: "Strangethings",
#   credits: "artist--producer--writer",
#   spotify_link: "https://open.spotify.com/embed/track/24Yc8hds2PMZ0l4WdJEyk3?utm_source=generator&theme=0"
# )

# moon = Song.create!(
#   title: "The Far Side of the Moon",
#   year: "2015",
#   artist: "Strangethings",
#   credits: "artist--producer--writer",
#   spotify_link: "https://open.spotify.com/embed/track/17yvQx92Gqj5f6NxUEZ7In?utm_source=generator&theme=0"
# )

# over = Song.create!(
#   title: "Over Me (feat. Jenny Ray)",
#   year: "2015",
#   artist: "Strangethings, Jenny Ray",
#   credits: "artist--producer--writer",
#   spotify_link: "https://open.spotify.com/embed/track/7DRW8Oj7jxTvrtie2AxZOT?utm_source=generator&theme=0"
# )

# bright = Song.create!(
#   title: "Bright Lights & Cigarettes",
#   year: "2015",
#   artist: "Strangethings",
#   credits: "artist--producer--writer",
#   spotify_link: "https://open.spotify.com/embed/track/1CluRM8W4LhnNh2I5IXzGQ?utm_source=generator&theme=0"
# )

