class Admin::DashboardController < ApplicationController

  http_basic_authenticate_with name: ENV['ENV_USERNAME'], password: ENV['ENV_PASSWORD']

  def show
  end
end
