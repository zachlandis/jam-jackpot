class EntriesController < ApplicationController

    def index 
        entries = Entry.all 
        render json: entries
    end
end

# if params[:giveaway_id]
#     entry = Entry.find(params[:giveaway_id])
#     entries = giveaway.entries
# else
#     entries = Entry.all
# end
#     render json: entries
# end