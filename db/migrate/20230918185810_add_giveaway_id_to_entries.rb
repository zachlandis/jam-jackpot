class AddGiveawayIdToEntries < ActiveRecord::Migration[7.0]
  def change
    add_reference :entries, :giveaway, null: false, foreign_key: true
  end
end
