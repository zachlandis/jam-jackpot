class GiveawaySerializer < ActiveModel::Serializer
  attributes :id, :title, :event_date, :event_venue, :event_location, :genre, :event_poster, :total_entries

  has_one :prize, dependent: :destroy
  has_many :users
  has_many :entries, serializer: EntrySerializer

  def prize
    object.prize.attributes
  end
end
