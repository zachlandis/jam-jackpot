class PrizesController < ApplicationController

    def index 
        prizes = Prize.all 
        render json: prizes
    end
end
