class SessionsController < ApplicationController

    skip_before_action :authenticate_user, only: [:create, :destroy]

    def create  
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password]) 
            session[:user_id] = user.id 
            render json: user, status: :accepted
        else
            render json: {error: "Login Error"}, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
        head :no_content
    end
end
