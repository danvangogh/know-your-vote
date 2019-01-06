class ResultsController < ApplicationController
  def show
    @result = Result.find(params[:id])
    render json: @result
  end

  def index
    @results = Result.all

    render json: @results
  end

  def create
    @result = Result.new

    @result.save
    render json: @result
  end
end
