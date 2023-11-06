class Entry < ApplicationRecord
    belongs_to :user
    belongs_to :giveaway

    enum entry_type: { Facebook: 0, Instagram:1 }

    # validates_uniqueness_of :entry_type, scope: :user_id, message: "already exists for this user"

end
