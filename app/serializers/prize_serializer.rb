class PrizeSerializer < ActiveModel::Serializer
  attributes :id, :number_of_tickets, :prize_name

  belongs_to :giveaway
end
