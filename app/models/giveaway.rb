class Giveaway < ApplicationRecord
    has_many :entries 
    has_many :users, through: :entries
    has_one :prize 

    validates :title, :event_date, :event_venue, :event_location, :event_poster, presence: true 
end
