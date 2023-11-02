class EntrySerializer < ActiveModel::Serializer
  attributes :id, :entry_date, :winner, :user_id, :giveaway_id, :giveaway

  belongs_to :user
  belongs_to :giveaway
end
