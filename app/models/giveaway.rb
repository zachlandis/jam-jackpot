class Giveaway < ApplicationRecord
    has_many :entries 
    has_many :users, through: :entries
    has_one :prize 
end
