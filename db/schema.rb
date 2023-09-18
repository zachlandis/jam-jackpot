ActiveRecord::Schema[7.0].define(version: 2023_09_18_164833) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "giveaways", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
