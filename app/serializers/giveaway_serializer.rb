class GiveawaySerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :entries, serializer: EntrySerializer
  has_many :users
  has_one :prize
end
