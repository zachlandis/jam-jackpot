class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :prev_wins, :user_city, :user_state

  has_many :entries
  has_many :giveaways
end
