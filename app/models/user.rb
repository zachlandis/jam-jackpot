class User < ApplicationRecord
    has_secure_password
    
    has_many :entries, dependent: :destroy
    has_many :giveaways, through: :entries

    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :password, presence: true
end
