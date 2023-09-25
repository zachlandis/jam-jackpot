class UsersController < ApplicationController

    before_action :find_user, only: [:destroy]

    def index 
        users = User.all.order(first_name: :asc)
        render json: users
    end

    def create
        user = User.create!(user_params)
        render json: user 
    end

    def update
        @user = User.find(params[:id])
        
        if @user.update(user_params)
            render json: @user, status: :accepted
        else
            render json: {error: "Failed to update giveaway" }, status: :unprocessable_entity
        end
    end

    
    def destroy
        if @user
            @user.destroy
            head :no_content
        end
    end
    
    
    private
    
    def user_params
        params.permit(:first_name, :last_name, :phone, :email, :user_city, :user_state, :prev_wins, :admin)
    end
    
    def find_user
        @user = User.find(params[:id])
    end

end
