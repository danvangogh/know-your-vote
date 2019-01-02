class QuotesController < ApplicationController

  def index
    @quotes = Quote.all
    render json: @quotes
  end

  def show
    @quote = Quote.find(params[:id])
    render json: @quote
  end

  def create
    @quote = Quote.new(quote_params)

    @quote.save
    render json: @quote
  end

private

  def quote_params
    params.require(:quote).permit(:text, :party_id)
  end

end
