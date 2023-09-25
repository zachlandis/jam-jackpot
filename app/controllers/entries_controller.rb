class EntriesController < ApplicationController

  def index
    entries = Entry.includes(giveaway: :prize).joins(giveaway: :prize).order('giveaways.event_date ASC')
    render json: entries, include: { giveaway: :prize }
  end

  def update
    entry = Entry.find(params[:id])
    entry.update(entry_params)
    render json: entry
  end
  
  private

  def entry_params
    params.permit(:user, :entry_date, :giveaway, :winner)
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