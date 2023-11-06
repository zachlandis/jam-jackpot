class PrizeSerializer < ActiveModel::Serializer
  attributes :number_of_tickets, :prize_name, :redemption_instructions

  belongs_to :giveaway
end
