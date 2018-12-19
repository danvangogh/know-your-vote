class PartiesController < ApplicationController

  def index
    @parties = Party.all
    render json: @parties
  end

  def show
  end

end
