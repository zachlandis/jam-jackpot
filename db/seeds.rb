require 'faker'

puts "Seeding Data"

# Create Giveaways
giveaway1 = Giveaway.create!(title: "Shpongle - Red Rocks - 10/27/2023-10/28/2023 - Denver, Colorado")
giveaway2 = Giveaway.create!(title: "Day of the Deadmau5: Deadmau5- Red Rocks - 11-03-2023-11-04-2023 - Morrison, Colorado")
giveaway3 = Giveaway.create!(title: "Ember Shores 2023 - Fiesta Americana - 12-08-2023-12-10-2023 - Cancun, MX")
giveaway4 = Giveaway.create!(title: "DJ Diesel Presents Shaq's Bass All-Stars: Female Edition - Mission Ballroom - 01-05-2024-01-05-2024 - Denver, Colorado")
giveaway5 = Giveaway.create!(title: "Playboi Carti - Ball Arena - 09-06-2023-09-06-2023 - Denver, Colorado")

# Create Prizes for Giveaways
giveaway1.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway1.title)
giveaway2.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway2.title)
giveaway3.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway3.title)
giveaway4.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway4.title)
giveaway5.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway5.title)

# Create 20 Users
users = []
20.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  email = Faker::Internet.email
  phone = Faker::PhoneNumber.phone_number
  random_giveaway = Giveaway.order("RANDOM()").first 
  prev_wins = random_giveaway.title

  users << User.create!(
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    prev_wins: prev_wins
  )
end

# Create Entries (10 per giveaway)
giveaways = [giveaway1, giveaway2, giveaway3, giveaway4, giveaway5]
giveaways.each do |giveaway|
  10.times do
    random_user = users.sample
    Entry.create!(user: random_user, giveaway: giveaway)
  end
end

puts "Seeded!"
