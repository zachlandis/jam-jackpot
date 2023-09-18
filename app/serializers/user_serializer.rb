class UserSerializer < ActiveModel::Serializer
  attributes :id

  has_many :entries
  has_many :giveaways
end
