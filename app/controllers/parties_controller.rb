class PartiesController < ApplicationController

  def index
    @parties = Party.all
    render json: @parties
  end

  def show
    @party = Party.find(params[:id])
    render json: @party
  end

end
