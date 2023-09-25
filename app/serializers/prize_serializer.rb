class PrizeSerializer < ActiveModel::Serializer
  attributes :id, :number_of_tickets, :prize_name, :redemption_instructions

  belongs_to :giveaway
end
