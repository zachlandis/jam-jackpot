class Giveaway < ApplicationRecord
    has_many :entries, dependent: :destroy
    has_many :users, through: :entries
    has_one :prize, dependent: :destroy

    validates :title, :event_date, :event_venue, :event_location, :event_poster, presence: true 
end
