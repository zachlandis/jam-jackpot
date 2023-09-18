class GiveawaysController < ApplicationController

    def index 
        giveaways = Giveaway.all 
        render json: giveaways, include: :entries
    end
end
