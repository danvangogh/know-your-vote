Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  resources :topics, only: [:index]
  resources :quotes, only: [:show, :index]
  resources :parties, only: [:show, :index]
  
end
