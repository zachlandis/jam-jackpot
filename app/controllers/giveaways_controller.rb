class GiveawaysController < ApplicationController

    def index 
        giveaways = Giveaway.all 
        render json: giveaways
    end
end
