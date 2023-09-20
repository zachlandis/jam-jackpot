class GiveawaysController < ApplicationController

    def index 
        giveaways = Giveaway.all.order(event_date: :asc)
        render json: giveaways, include: :entries
    end

    def create 
        giveaway = Giveaway.create(giveaway_params)
        render json: giveaway
    end

    def destroy
        giveaway = Giveaway.find(params[:id])
        giveaway.destroy
    end

    private
    
    def giveaway_params
        params.permit(:title, :event_date, :event_venue, :event_location, :event_poster)
    end
end
