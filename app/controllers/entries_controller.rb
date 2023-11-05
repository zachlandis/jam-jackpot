class EntriesController < ApplicationController

  def index
    entries = Entry.includes(:user, giveaway: :prize)
                 .joins(giveaway: :prize)
                 .order('giveaways.event_date ASC')
    render json: entries, include: { user: { only: [:id, :first_name, :last_name, :email] } }
  end
  

  def create
    puts params
    @entry = Entry.new(entry_params)
    @entry.entry_date = Date.today
    if  @current_user.entries << @entry
      render json: @entry, status: :created
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end
  
  def update
    @entry = Entry.find(params[:id])
    if @entry.update(entry_params)
      if @entry.winner
        Entry.where(giveaway_id: @entry.giveaway.id).where.not(id: @entry.id).update_all(winner: false)
        winnningUser = @entry.user
        prev_wins_array = winnningUser.prev_wins || []
        new_object = {
          giveaway: @entry.giveaway,
          prize: @entry.giveaway.prize
        }.to_json
        prev_wins_array << new_object
        winnningUser.update_columns(prev_wins: prev_wins_array)
      end

      render json: @entry
    else
      render json: { errors: @entry.errors }, status: :unprocessable_entity
    end
  end
  
  private

  def entry_params
    params.permit(:id, :entry_type, :giveaway_id, :winner)
  end
end
