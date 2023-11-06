require 'faker'

puts "Seeding Data"

# Create Giveaways
giveaway1 = Giveaway.create!(
  title: "Shpongle",
  event_date: Date.new(2023, 10, 27),
  event_venue: "Red Rocks",
  event_location: "Denver, Colorado",
  event_poster: "https://public.boxcloud.com/api/2.0/internal_files/1263553960758/versions/1380669724758/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!_GCCOYat8V7lnmPYUsB5s4DpVu9TklQUUMQMV7dsq_GpIJTqgJgwi3ZfLYLa3ezLwYFvWmP8iPccHFGki1WrKHlcWf3dmpsp5VSAUoZE6u--MGNE8PjYbOIQCf-TAyIAmvzfjrYmT43gIkZiw7bDjaFYHTavrIaLxYjACnSI1QBhEnZz5i5g-HN9qEvz34Y8YmtWhipjcrA7kZHXvA4QLkazQG9O-63aEJCayqBsO2oopQBW-HB4kvUet4biFIUkEhti-b5ULsTLcxd-e_BRFHtq6bORCVAJLmev2UBaf-eC7FfF_BTlHkLRs0mZMyypOsmv7P_NQd_a7hxM6296zhsMSh7NXCEOLONKy8hBQ1KB9VeW1yvp4PNOg-FrFX4DD_pXY7_3xfPBgIQtGn1UewUAzwfaQHALH2SZHSatK4ODC9XsUcqAxMdBDk2Py8ezIcu893duYI7CloqNp1nwHBCWyac4dBm5ecCA1KLzAWR--xd4PrdJsJY5ZMBtxsFHqEA2S-0kCojIVeZYeFLiZGsmaeYaUO4s_Sj4NalejCB_qstry8gjoTCRXD_zqbARoPu2&shared_link=https%3A%2F%2Flne.app.box.com%2Fs%2Fos7ar8y6hcxiic82u0a7xf9sxiacsxu0&box_client_name=box-content-preview&box_client_version=2.102.0",
  total_entries: rand(1..100),
  genre: "Jam"
)

giveaway2 = Giveaway.create!(
  title: "Day of the Deadmau5: Deadmau5",
  event_date: Date.new(2023, 11, 3),
  event_venue: "Red Rocks",
  event_location: "Morrison, Colorado",
  event_poster: "https://uc2fd91f0b28baaaa75579f47173.previews.dropboxusercontent.com/p/thumb/ACG0WrAtxl_61snb8dwyJzX8nTdiow0bZ9EH2z-90UN054_fPr5MX9M_9ely4AagOK9nkJizQMiAMnG5afDbLzWCACMGYMXg_LqBPYnD1P5rEgVxDNp3VKpGfKfAk0OOcfJxCa6WYjEBoVvsAS-vBEkGi3ln_hI-yetyx2n6gTqlp257ulpKoSt26rrUnHs2aFSweRCl4sdT1VPDwRB97o1R5SDSZalt0nDYoYvr1mof24MueJyN08IQn08-m7hE5TKLUQECKBdIEwstOxPgvkqnpTit_7JW5QyxxcykOOxRR1-nMPpqGGpeYvO1wFf3z-F6suKbaWgMzGEOTbvr3FTP/p.jpeg",
  total_entries: rand(1..100),
  genre: "House"
)

giveaway3 = Giveaway.create!(
  title: "Tape B",
  event_date: Date.new(2023, 12, 22),
  event_venue: "Ogden Theatre",
  event_location: "Denver, Colorado",
  event_poster: "https://uc930bb1a614c2c09ca98dba653f.previews.dropboxusercontent.com/p/thumb/ACGH_kZUN50ty2CEppylX3ddqmYBdOyyozhpFByHu8wFcdH4eU55eWTg273CIkbV-JPs8bOtdBDH3X8t2LZRTkPMAYFZA2viaugUXozXb-azmnMhhgz4CgYQkg8PjHJvFtHsIm5UL-Ezce3ETmkzfpIDmiGfbXf3PPXNaQb7spBPLtrmOMM1SausUbUyBne6BB2--T9wcF7czE7cKw2MRrBAzeLOnR3zQOhZ1GMeBhvoDfCpRVPR_WO8_T9cx0alVq8nVPX1I_ENX5btWvHwvCdfZIvfWCaeDspPLqQYpAPLr9RgaOIpOfSjE874GFvnbAFhWhssqbIk-aFNU0Hg65p_/p.jpeg",
  total_entries: rand(1..100),
  genre: "Bass"
)

giveaway4 = Giveaway.create!(
  title: "DJ Diesel Presents Shaq's Bass All-Stars: Female Edition",
  event_date: Date.new(2024, 1, 5),
  event_venue: "Mission Ballroom",
  event_location: "Denver, Colorado",
  event_poster: "https://uc88adffada72ebbd5c2cc966cd7.previews.dropboxusercontent.com/p/thumb/ACHEzZfx9men6AJikgijaLFDFrHImEYsuOQyClJgDe2ACeq7-meyuAJiVcOZk3vz4qRXFrlq9le4YcM9QwFTyaIf8diYwCcQYoZN4BWhlpxcoz5FmWK7UnMMwxPiMF3tNoBrFMaLX3Bt9MsHas0AMu1LM4IEVv10aUyKNtLyzZQDKfER_U3F8Dx3g60k4Rk1lYOpUVq-NLqmbZvZOigrbL-Fc2kIzlGMISl836TzW2ghnB8dxZtJTETiKHhTB6Ssgu1VyCwmCxAtW4OW953qr_xNnAIHXAYpEtAd5ZtukjLP61yhgmwKPbJe-OOIDhibm9ZrMYeNMd9VFgdZCIhV5KcS/p.jpeg",
  total_entries: rand(1..100), 
  genre: "Bass"
)

giveaway5 = Giveaway.create!(
  title: "Playboi Carti",
  event_date: Date.new(2024, 1, 15),
  event_venue: "Ball Arena",
  event_location: "Denver, Colorado",
  event_poster: "https://ucd147a45496af2e9120633e1ac9.previews.dropboxusercontent.com/p/thumb/ACEITHQw1Z1Tw6zuQpaIHtebMJqLyxTZM7qHPGO2cl8zprGgLoO1k66D_eUxqZFrJa2ZIT9V0GsZ0FYQMnF7s13qjFU403JWqc65KqBMkf0gHqv11ho2ZumXBhHdFWua2op4QwoiSvTHpfh7yY1SxethlzEFinMijGPPm-_4jUCT4qW_FGU_az4PBAXMo6AMtSGb9hNOI7XMPJPZtCbjKU2Rqjou6PD5rxis56ZVjIGmtZJCzrpPiJzwM17eBA3Vw11WnafWDsymk3FV2GaTIHHqW5mmjIXoh1cKeTtU809Tskfuw66IiBSJqJ9nixvd6krL0XDggzoMpm0iPn1XAGYw/p.jpeg",
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
20.times do | i |
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
    admin: (i % 7).zero?
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
