class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :user_city, :user_state, :admin, :prev_wins


  has_many :entries
  has_many :giveaways
end
