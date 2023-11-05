class AddTypeToEntries < ActiveRecord::Migration[7.0]
  def change
    add_column :entries, :entry_type, :integer, default: 0
  end
end
