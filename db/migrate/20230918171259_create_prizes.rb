class CreatePrizes < ActiveRecord::Migration[7.0]
  def change
    create_table :prizes do |t|
      t.integer :number_of_tickets
      t.string :prize_name

      t.timestamps
    end
  end
end
