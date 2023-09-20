class GiveawaysController < ApplicationController
    before_action :find_giveaway, only: [:destroy]


    def index 
        giveaways = Giveaway.all.order(event_date: :asc)
        render json: giveaways, include: :entries
    end

    def create 
        giveaway = Giveaway.create(giveaway_params)
        render json: giveaway
    end

    def update
        @giveaway = Giveaway.find(params[:id])
        
        if @giveaway.update(giveaway_params)
            render json: @giveaway, status: :accepted
        else
            render json: {error: "Failed to update giveaway" }, status: :unprocessable_entity
        end
    end

    def destroy
        if @giveaway
            @giveaway.destroy
            head :no_content
        end
    end

    private
    
    def giveaway_params
        params.permit(:title, :event_date, :event_venue, :event_location, :event_poster)
    end

    def find_giveaway
        @giveaway = Giveaway.find(params[:id])
    end
end
