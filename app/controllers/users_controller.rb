class UsersController < ApplicationController

    skip_before_action :authenticate_user, only: [:current_user_info]
  
    def index
      users = User.all
      render json: users, status: :ok
    end
  
    def show
      render json: current_user, status: :ok
    end

    def current_user_info
      if session[:user_id].present?
        user = User.find(session[:user_id])
        render json: user, status: :ok
      else
        render json: { error: 'User not authenticated (from controller)' }, status: :unauthorized
      end
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
      params.require(:user).permit(
        :first_name, :last_name, :email, :phone, :user_city, :user_state, :password, :id, :admin,
        prev_wins: [] 
      )
    end
        
    
    
  end
  