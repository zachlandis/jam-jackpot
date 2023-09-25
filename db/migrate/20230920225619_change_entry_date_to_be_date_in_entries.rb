class ChangeEntryDateToBeDateInEntries < ActiveRecord::Migration[7.0]
  def change
    change_column :entries, :entry_date, :date
  end
end
