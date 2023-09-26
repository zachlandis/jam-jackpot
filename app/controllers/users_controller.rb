class UsersController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create]

    def index
        users = User.all  
        render json: users, status: :ok
    end
    
    def show
        render json: current_user, status: :ok
    end
    
    def create 
        user = User.create(user_params)
            session[:user_id] = user.id
            render json: user, status: :accepted
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end


    private
    
    def user_params
        params.permit(:email, :phone, :first_name, :last_name, :user_city, :user_state, :password, :admin)
    end
end
