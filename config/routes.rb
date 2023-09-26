Rails.application.routes.draw do
  
  resources :giveaways
  resources :entries
  resources :prizes
  resources :users
  

  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'



  root "giveaways#index"
end
