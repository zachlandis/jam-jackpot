Rails.application.routes.draw do
  resources :giveaways
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "giveaways#index"
end
