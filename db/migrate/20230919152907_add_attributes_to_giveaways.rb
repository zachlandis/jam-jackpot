class AddAttributesToGiveaways < ActiveRecord::Migration[7.0]
  def change
    add_column :giveaways, :event_date, :date
    add_column :giveaways, :event_venue, :string
    add_column :giveaways, :event_location, :string
    add_column :giveaways, :event_poster, :string
    add_column :giveaways, :total_entries, :integer
  end
end
