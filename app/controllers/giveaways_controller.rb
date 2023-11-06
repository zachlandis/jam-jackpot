class GiveawaysController < ApplicationController
    before_action :find_giveaway, only: [:destroy]
  
    def index
      giveaways = Giveaway.includes(:entries, :prize).order(event_date: :asc)
  
      if giveaways.any?
        render json: giveaways, include: [:entries, :prize]
      else
        render json: { message: 'No giveaways available' }
      end
    end
    
  
    def create
      @giveaway = Giveaway.new(giveaway_params)
      @giveaway.total_entries = 0
  
      prize_name = "#{@giveaway.title} - #{@giveaway.event_venue} - #{@giveaway.event_date}"
  
      prize = Prize.new(prize_name: prize_name, number_of_tickets: params[:number_of_tickets], redemption_instructions: params[:redemption_instructions])
  
      @giveaway.prize = prize
  
      if @giveaway.save
        render json: @giveaway, status: :created
      else
        render json: { errors: @giveaway.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      if @giveaway.update(giveaway_params)
        render json: @giveaway, status: :accepted
      else
        render json: { error: "Failed to update giveaway" }, status: :unprocessable_entity
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
      params.permit(:title, :event_date, :event_venue, :event_location, :genre, :event_poster, :total_entries, :id)
    end
  
    def find_giveaway
      @giveaway = Giveaway.find_by(id: params[:id])
      if @giveaway.nil?
        render json: { error: "Giveaway not found" }, status: :not_found
      end
    end
    
  end
  