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
        user.update(user_params)
        render json: user
        head :no_content
    end
    
    def destroy
        if @user
            @user.destroy
            head :no_content
        end
    end
    
    
    private
    
    def user_params
        params.permit(:first_name, :last_name, :phone, :email, :user_city, :user_state, :prev_wins)
    end
    
    def find_user
        @user = User.find(params[:id])
    end

end
