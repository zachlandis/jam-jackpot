class EntrySerializer < ActiveModel::Serializer
  attributes :id, :entry_date, :winner, :user_id

  belongs_to :user
  belongs_to :giveaway
end
