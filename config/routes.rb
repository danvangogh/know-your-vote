Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  resources :topics, only: [:show, :index]
  resources :quotes, only: [:show, :index]
  resources :parties, only: [:show, :index]
  resources :results, only: [:show, :index, :create]

  namespace :admin do
    root to: "dashboard#show"
    resources :topics, only: [:show, :index, :create, :update, :destroy]
    resources :quotes, only: [:show, :index, :create, :update, :destroy]
  end

  get '*path' => redirect('/')

end
