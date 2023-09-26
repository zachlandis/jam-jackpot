class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    before_action :authenticate_user

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    

    def current_user
        @current_user ||= User.find_by_id(session[:user_id]) 
    end

    private

    def authenticate_user 
        render json: {errors: {User: "Not Authorized"} }, status: :unauthorized unless current_user
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def render_not_found_response(error)
        render json: { message: error.full_messages}, status: :not_found
    end
end
