class QuotesController < ApplicationController

  def index
    @quotes = Quote.all
    render json: @quotes
  end

  def show
    @quote = Quote.find(params[:id])
    render json: @quote
  end

  def new
  end

  def create
    @quote = Quote.new(params[:quote])
    
    @quote.save
    redirect_to '/'
  end

end
