class EntrySerializer < ActiveModel::Serializer
  attributes :id, :user

  belongs_to :user
  belongs_to :giveaway
end
