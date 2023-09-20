class User < ApplicationRecord
    has_many :entries, dependent: :destroy
    has_many :giveaways, through: :entries
end
