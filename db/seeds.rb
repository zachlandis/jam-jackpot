require 'faker'

puts "Seeding Data"

# Create Giveaways
giveaway1 = Giveaway.create!(
  title: "Shpongle",
  event_date: Date.new(2023, 10, 27),
  event_venue: "Red Rocks",
  event_location: "Denver, Colorado",
  event_poster: "https://public.boxcloud.com/api/2.0/internal_files/1263541882416/versions/1380656703216/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!_rWHzIC71oK_wJqRZ3G0EO7ujcQPZPI21DARQt9gBerNJBBTgdX9olqvjfrk_AvHBI-i0gtQRaE1MF6Svj4eK2ByHd34XNBwGDgbxYpbRaHiOc52OvNqJnJ6RWA9TyNgqnaModjTWRdcOHNu0OYpJyd_VPKbG9381kNPsadPmnQbvCUc5liFRmcLZlr4dMcEbtpM5q3d1m9YDbGUY3xrgiCBBFo7OgC3aJbLEQmxrar_ydrM6wRJctcX99mpLUqG5npIS355maPT3vN-1ggr8GrdDLKyhG2nJOPhpwY7s4uxlpDyALk2KH5MB7TaiNcvBAxT6Dj-SZPDBnkZ6pNwPf9I5ZNGXAJMkUxGB5T07-NwrP11hbloG08EvBT93nFrus3AjYzLmIjDxH7A6hqR8MtsKN2i8SAiFadZaDpK91xFdxPAuhmw2tARCwU9gVvKGPFi8VPoxB5nmekyBMdc_820TJiEc7koJUgufGATr1uOXfzWGmaSZnfHioiZ5JCOSbRx_xy7H_oq6yz7pB2qPdFb-s6S3QYoHK3FpQcOtV24r3USq65EXu-OPO6Z9Qeu7a9H&shared_link=https%3A%2F%2Flne.app.box.com%2Fs%2Fos7ar8y6hcxiic82u0a7xf9sxiacsxu0&box_client_name=box-content-preview&box_client_version=2.102.0",
  total_entries: rand(1..100)
)

giveaway2 = Giveaway.create!(
  title: "Day of the Deadmau5: Deadmau5",
  event_date: Date.new(2023, 11, 3),
  event_venue: "Red Rocks",
  event_location: "Morrison, Colorado",
  event_poster: "https://ucad152b583b4b17ae3ee2e0f530.previews.dropboxusercontent.com/p/thumb/ACCtPgO_LAdn5VqLm8Ptz4DL1Rkg8Rq69wOg6ack5I-m_R2sWR6D7HeA7tVv0kJUUkmmPfV61OzeZAeRd3JCbtL7InIyM8yQ5jc0TTOi92jchGYgRpoMftPipv6G-VjAlWRH_66uM_oJTEYfI-vXudke_NyzpnXzsyb__YDIRwFMOmk380cbQOxxz1E1agcvBhanZR8tCLFA9VmDnlk03l_Ga5t5YyZvnMP_kOZoKjIeL8iWQtSEnoRC8f4LUKt_RZV7bZEdu3q6QW2b1dcvdbIyq4Nz4waWZf7ea8XbgsKptxZRZBi17P6awb6S7WpIPrcCCTaje31YYR7WEXJ31cgG/p.jpeg",
  total_entries: rand(1..100)
)

giveaway3 = Giveaway.create!(
  title: "Tape B",
  event_date: Date.new(2023, 12, 22),
  event_venue: "Ogden Theatre",
  event_location: "Denver, Colorado",
  event_poster: "https://uc930bb1a614c2c09ca98dba653f.previews.dropboxusercontent.com/p/thumb/ACA11VoAs9_6-F2qITLsFAYTza8vaQ76NxK-cO2pU_DpHrWYk-03GWW6sMHJy4e897Wsc9KeLwIm9ItY7ZqhTxbUk-ozbNR4HmphwK7AMTt64kmfjbxf9Tdq5G7g4WnDCQgsxj0IT-MpaD4MK-P2Fx5MMOYDM-UT3DoRB4vU2ugm7O-RVSRi4R_09AN1WjhvDXV-sk7r0x-cjrDJsOLWc_fUyXjIs0RKNRt4NrjBgyIyFD6sBHI9PiWoqJGWOjeMYhc9Dig4jv_j1SnInC9cQE5440XVmdb-2CocASZcBFM9H7s63DHGwBc0Jsd7UUuTCVpp3NU64ib9Y9jEQmkoHjvh/p.jpeg",
  total_entries: rand(1..100)
)

giveaway4 = Giveaway.create!(
  title: "DJ Diesel Presents Shaq's Bass All-Stars: Female Edition",
  event_date: Date.new(2024, 1, 5),
  event_venue: "Mission Ballroom",
  event_location: "Denver, Colorado",
  event_poster: "https://uc1783f43c0ee9cc36fc6d2ad916.previews.dropboxusercontent.com/p/thumb/ACDaHueNo13LHllMNDnfJtmaZNU1mXu8e2Miwd_K_7YRRnaoE971PqcrAwd4izzhA-F6GBbkW5ET6IRH9thyaBCQII-dNSxTVQ8NjaV96uYaZ2pO6_klssbBGW-ljT0PLWL6if5E3POuaPI0g7HSYdEO2xmhqyHeOS-_qXMctdtk5ADYTXyoWTlvLS9Cbn2EGTveualeFwCXpUMzQVxRRU1mwDEfdiaNeplFhCTzxcZGRzV1MrCcS5bAtDHDUYcPRM79HnK-yphHrNGn1et4wyl3cYxHjpf9rPvZVzplX-GRrPl_oY2L_I1-ZrazhT4GGQfiGaWWK9vBpAIdOJ6w0_Je/p.jpeg",
  total_entries: rand(1..100)
)

giveaway5 = Giveaway.create!(
  title: "Playboi Carti",
  event_date: Date.new(2023, 9, 6),
  event_venue: "Ball Arena",
  event_location: "Denver, Colorado",
  event_poster: "https://ucd147a45496af2e9120633e1ac9.previews.dropboxusercontent.com/p/thumb/ACBKbGHebFxIiG3LUWzLeWdR9BP4WDFZbcsE8ir0VpJkxjzez10WIpvs5StCgcdvmcxviXB6Aji_31TE_NDYLVtnEchT3N2vouLeMyQ30AoGA0OLli1tNxv6KiN4Swb2xSTHxKUI9VsLNCcC0B2YV2nxP5PrcehLg11vv0N6bdPY1nlOYEUgrx_eJzY68fOxubMkX35UUyCbywTrGrlXvklZjm3JaZLA6baJIp7lPghPzdj98AVPjHcfgNGQq5mSZW9Bcm7JNu2SgkiZfsxbSyHQ9aKNxn2ItUS1DUIreTlG-PXfC55DYMwc7sK8nlTyLraEt5IOXln0A0OZYI2Qh3Rh/p.jpeg",
  total_entries: rand(1..100)
)


# Create Prizes for Giveaways
giveaway1.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway1.title)
giveaway2.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway2.title)
giveaway3.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway3.title)
giveaway4.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway4.title)
giveaway5.create_prize(number_of_tickets: rand(2..4), prize_name: giveaway5.title)

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
  user_city = cities.pop # Get a random city from the array
  user_state = states.pop # Get a random state from the array

  users << User.create!(
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    prev_wins: prev_wins,
    user_city: user_city,      # Assign the random city
    user_state: user_state    # Assign the random state
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
