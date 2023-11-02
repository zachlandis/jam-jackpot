class EntriesController < ApplicationController

  def index
    entries = Entry.includes(:user, giveaway: :prize)
                 .joins(giveaway: :prize)
                 .order('giveaways.event_date ASC')
    render json: entries, include: { user: { only: [:id, :first_name, :last_name, :email] } }
  end
  

  def update
    @entry = Entry.find(params[:id])
    if @entry.update(entry_params)
      render json: @entry
    else
      render json: { errors: @entry.errors }, status: :unprocessable_entity
    end
  end
  
  private

  def entry_params
    params.require(:entry).permit(:entry_date, :giveaway_id, :winner, user_attributes: [:first_name, :last_name, :email])
  end
end
