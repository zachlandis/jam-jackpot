class AddEntryData < ActiveRecord::Migration[7.0]
  def change
    add_column :entries, :entry_date, :datetime
    add_column :entries, :winner, :boolean
  end
end
