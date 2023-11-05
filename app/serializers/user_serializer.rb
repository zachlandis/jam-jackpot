class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :user_city, :user_state, :admin, :prev_wins


  has_many :entries
  has_many :giveaways

  def prev_wins
    object.prev_wins.map { |win| JSON.parse(win) } if object.prev_wins.present?
  end
end
