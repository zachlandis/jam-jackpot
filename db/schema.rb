# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_05_174104) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.string "user"
    t.string "giveaway"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "giveaway_id", null: false
    t.date "entry_date"
    t.boolean "winner"
    t.integer "entry_type", default: 0
    t.index ["giveaway_id"], name: "index_entries_on_giveaway_id"
    t.index ["user_id"], name: "index_entries_on_user_id"
  end

  create_table "giveaways", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "event_date"
    t.string "event_venue"
    t.string "event_location"
    t.string "event_poster"
    t.integer "total_entries"
    t.string "genre"
  end

  create_table "prizes", force: :cascade do |t|
    t.integer "number_of_tickets"
    t.string "prize_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "giveaway_id"
    t.string "redemption_instructions"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.text "prev_wins", array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_city"
    t.string "user_state"
    t.string "password_digest"
    t.boolean "admin"
    t.string "entries", default: [], array: true
  end

  add_foreign_key "entries", "giveaways"
  add_foreign_key "entries", "users"
  add_foreign_key "prizes", "giveaways"
end
