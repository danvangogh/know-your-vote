class Admin::QuotesController < ApplicationController

  http_basic_authenticate_with name: ENV['ENV_USERNAME'], password: ENV['ENV_PASSWORD']

  def create
    @quote = Quote.new(quote_params)

    @quote.save
    render json: @quote
  end

  def index
    @quotes = Quote.all
    render json: @quotes
  end

  def destroy
    @quotes = Quote.find(params[:id])
    @quotes.destroy
  end

  private

  def quote_params
    params.require(:quote).permit(:text, :party_id)
  end

end
