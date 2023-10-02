Rails.application.routes.draw do
  
  resources :giveaways
  resources :entries
  resources :prizes
  resources :users
  

  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

  get '/current_user_info', to: 'users#current_user_info'



  root "giveaways#index"
end
