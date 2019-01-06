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
    @result = Result.new(result_params)

    @result.save
    render json: @result
  end

  private

  def result_params
    params.require(:result).permit(:grn, :ndp, :lib, :cp)
  end

end
