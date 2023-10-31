class AddEntriesToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :entries, :string, array: true, default: []
  end
end
