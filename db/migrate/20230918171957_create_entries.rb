class CreateEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :entries do |t|
      t.string :user
      t.string :giveaway

      t.timestamps
    end
  end
end
