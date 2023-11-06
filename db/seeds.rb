require 'faker'

puts "Seeding Data"

# Create Giveaways
giveaway1 = Giveaway.create!(
  title: "Shpongle",
  event_date: Date.new(2023, 10, 27),
  event_venue: "Red Rocks",
  event_location: "Denver, Colorado",
  event_poster: "https://public.boxcloud.com/api/2.0/internal_files/1263553960758/versions/1380669724758/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!KbLs791Wzby2GKWSrq-X5L8QGdtYYKmlbh_mxQYygGM_h-ENbCfaYM-qW4GPwJ0vKdNRtoHIQPSqNjgqA3ak0wATiSEps9TBnSvtEJMhYhpBPW-5lM9vxdPWSjBI0Dcr7SEMhf8onkEUTAZAQRJ3e8MqYrYfLkVdnlCZzaDogLkuQ-yzeUfAq5NcyIblIixfm_kTVawuo8Ot04mBDaNkkGN9cfqCGOR03DRNbkLpGtqGgYFZROYzhksB9eJLwysRCceZN0o2tjZ8IhTNUnzMtPj4W8cUMBfzj_33_G0wAIrg-ROIKlBBNjBzdN4i657gugCjjMQ5FRDbqFtin-YottlOHDSDYeWNYKHgErCYeHlezbG9E6mzc1P8RLDO_cvNPxaCOMQhbqAW3N26C-B7XLItCjUnzciXAc8kJ3smU99yZhme9SG0coyTGVNHm8JJ8LTdyymB8D2yyFt5MMRS-aoKbrtoPNRTrZ-obCCF-HdXXfZusUSHxFv0rPY0YjD4j3_OSbYIqwtZ9srtpNIc_GhT5jokwhyLoWDNAjx5osIQ-R5XDIETqZHLs1KxaImIJDl5&shared_link=https%3A%2F%2Flne.app.box.com%2Fs%2Fos7ar8y6hcxiic82u0a7xf9sxiacsxu0&box_client_name=box-content-preview&box_client_version=2.102.0",
  total_entries: rand(1..100),
  genre: "Jam"
)

giveaway2 = Giveaway.create!(
  title: "Day of the Deadmau5: Deadmau5",
  event_date: Date.new(2023, 11, 3),
  event_venue: "Red Rocks",
  event_location: "Morrison, Colorado",
  event_poster: "https://uc2fd91f0b28baaaa75579f47173.previews.dropboxusercontent.com/p/thumb/ACHJCBX16Sr6v6Gc-sr7InCuImCP7Sv8FrP60gG8iETC4uqvwo5cOXGGREodLvPg8cop749Thn_0iZan08yCnrkyTAvvB57yUfByBcN28ht8dELcBBP0lFbNY6Ise9mGkam3iViSXvPMjSkVG43ZwHMVuKfaGT3i0pTrvdA9MwUhTEEvbYc8zgTrC21B6kPOgcjZ3ldwu7jH1iE3BKidV4m9J9cP2zA2IxxoNke0dX2voXkuxSWcIZL2rRezfP_XaVZG0EnExVPjf1rkMhsSJ3KVurAKhSZtJxTybG8Bd6gbDpcBwIjx8BeIRHWlb2MJQFdh5QGFNjwDzRrujg-_d02F/p.jpeg",
  total_entries: rand(1..100),
  genre: "House"
)

giveaway3 = Giveaway.create!(
  title: "Tape B",
  event_date: Date.new(2023, 12, 22),
  event_venue: "Ogden Theatre",
  event_location: "Denver, Colorado",
  event_poster: "https://uc930bb1a614c2c09ca98dba653f.previews.dropboxusercontent.com/p/thumb/ACFJYOou8yx3xvgygZ9X9-azm5hWyoYyV_rhnT4_jPYNjfALyF2Pst9y2ho6TVHQ9WBLrkcUbol21ZOsbR1EDUxMsbEXd0yz1XWGoFUFsReC8bKdJHkCKTAvWWeKV53uA9O6J_y4ldD5f_2l4S2saAa43InoDpCtxE8JykKDz1vBujk6oIl50y-SOPwfPFon9Yij2BaOFu8PQmNtGRmWj-7OMxVerQ8PlEC6BRtF-pma9LcyiQ1OG3YNuLvCmLNJm_008VHUKmJZDgFEGN5aNqx_hS35IEciHaXDmAWaE1-oekNOhpelC70dO3EeAwTZdyPYswy6SM6H7mNzw3SEo68m/p.jpeg",
  total_entries: rand(1..100),
  genre: "Bass"
)

giveaway4 = Giveaway.create!(
  title: "DJ Diesel Presents Shaq's Bass All-Stars: Female Edition",
  event_date: Date.new(2024, 1, 5),
  event_venue: "Mission Ballroom",
  event_location: "Denver, Colorado",
  event_poster: "https://uc88adffada72ebbd5c2cc966cd7.previews.dropboxusercontent.com/p/thumb/ACGl2KVcHOnjFIDJxu-_o_jHpKRz3heYG8-6UmMZwYaqkfqTPowggq-5wCpqDUHjoa1CK31GiZZvK-zjlUp4qqHsZAn9j8jsnfBwmqp4NjCyBjd_jYFF42ltX3-w53KhRnJslS7wxw1GQ-52awRpXzwmyHVvW3C0BiDihrXfN6ZCo4vD6M5opxZrwP8BDGml7cKRKSxt0lhCKRCrQrZLLlUgtykjJryB8-CSfwwG0XAz6YI9kNQyNIv9NQ_-Z4ycSd_o4C4BdYIbVGfX3O63Z07LRge6tFM0M0KqedoFyRK22HEatMISixEZw8Jl6f3tTuJ_n-x7cEvGWmgqNKdf0gb7/p.jpeg",
  total_entries: rand(1..100), 
  genre: "Bass"
)

giveaway5 = Giveaway.create!(
  title: "Playboi Carti",
  event_date: Date.new(2023, 9, 6),
  event_venue: "Ball Arena",
  event_location: "Denver, Colorado",
  event_poster: "https://uc3f47e04e02090980312f283b73.previews.dropboxusercontent.com/p/thumb/ACGriWs50iG_AgXpNs8qq8DI77V3xOHp5SnK6keKQMxr9JN9vBZ3jGOWW2SSh2EcFac-OIsoSuiX7Bjd0PtLLcqyjKg6rCOyWu7rRNT4yTG9w7QIpIcFsPJENepIFODAtnj0s701S-CuIlTMshjPMxjOoI35agHHll11GXgpNwKcagnwcFM7g-r-TQaILclQo61PfZnL88plFeg_xW39XLwTHG7U_MxXABw4cOMHbnDBuPuYmTF3WPlR6R0onH61TgLZl2_IuHVhPvj5mFPwYfJ27yS9fYF9ZuIpMZbOFhJDz9-foaxlp6B85XGb8yZyNOqrspaqumu_c8118YJ8RthE/p.jpeg",
  total_entries: rand(1..100),
  genre: "Hip Hop"
)


# Create Prizes for Giveaways
giveaway1.create_prize(number_of_tickets: rand(2..4), prize_name: "#{giveaway1.title} - #{giveaway1.event_venue} - #{giveaway1.event_date}", redemption_instructions: "Pick up your tickets at the box office. Bring ID.")
giveaway2.create_prize(number_of_tickets: rand(2..4), prize_name: "#{giveaway2.title} - #{giveaway2.event_venue} - #{giveaway2.event_date}", redemption_instructions: "Pick up your tickets at the box office. Bring ID.")
giveaway3.create_prize(number_of_tickets: rand(2..4), prize_name: "#{giveaway3.title} - #{giveaway3.event_venue} - #{giveaway3.event_date}", redemption_instructions: "Pick up your tickets at the box office. Bring ID.")
giveaway4.create_prize(number_of_tickets: rand(2..4), prize_name: "#{giveaway4.title} - #{giveaway4.event_venue} - #{giveaway4.event_date}", redemption_instructions: "Pick up your tickets at the box office. Bring ID.")
giveaway5.create_prize(number_of_tickets: rand(2..4), prize_name: "#{giveaway5.title} - #{giveaway5.event_venue} - #{giveaway5.event_date}", redemption_instructions: "Pick up your tickets at the box office. Bring ID.")

# Create 20 Users
cities = Array.new(20) { Faker::Address.city }
states = Array.new(20) { Faker::Address.state_abbr }

users = []
20.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  email = Faker::Internet.email
  phone = Faker::PhoneNumber.phone_number
  random_giveaway = Giveaway.order("RANDOM()").first 
  prev_wins = random_giveaway.title
  user_city = cities.pop 
  user_state = states.pop

  users << User.create!(
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    prev_wins: prev_wins,
    user_city: user_city,  
    user_state: user_state,
    password: 'password123',
    admin: false
  )
end

giveaways = [giveaway1, giveaway2, giveaway3, giveaway4, giveaway5]
giveaways.each do |giveaway|
  10.times do
    random_user = users.sample
    entry_date = Faker::Date.between(from: 6.months.ago, to: Date.today)
    Entry.create!(user: random_user, giveaway: giveaway, entry_date: entry_date, winner: "")
  end
end

puts "Seeded!"
