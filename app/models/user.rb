class User < ApplicationRecord
    has_many :entries
    has_many :giveaways, through: :entries
end
