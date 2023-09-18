ActiveRecord::Schema[7.0].define(version: 2023_09_18_175044) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.string "user"
    t.string "giveaway" 
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_entries_on_user_id"
  end

  create_table "giveaways", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prizes", force: :cascade do |t|
    t.integer "number_of_tickets"
    t.string "prize_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "giveaway_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "prev_wins"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "entries", "users"
  add_foreign_key "prizes", "giveaways"
end
