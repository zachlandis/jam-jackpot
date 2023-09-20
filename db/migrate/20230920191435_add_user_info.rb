class AddUserInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :user_city, :string
    add_column :users, :user_state, :string
  end
end
