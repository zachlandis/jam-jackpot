class AddGiveawayIdToPrizes < ActiveRecord::Migration[7.0]
  def change
    add_column :prizes, :giveaway_id, :integer
    add_foreign_key :prizes, :giveaways
  end
end
