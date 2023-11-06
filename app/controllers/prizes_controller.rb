class PrizesController < ApplicationController

    def index 
        prizes = Prize.all 
        render json: prizes
    end

    def create 
        prize = Prize.create!(prize_params)
        render json: prize
    end

    def update
        prize = Prize.find(params[:id])
        prize.update(prize_params)
        render json: prize
    end

    def destroy
        prize = Prize.find(params[:id])
        prize.destroy
    end


    private

    def prize_params
        params.permit(:id, :prize_name, :number_of_tickets, :giveaway_id, :redemption_instructions)
    end
end
