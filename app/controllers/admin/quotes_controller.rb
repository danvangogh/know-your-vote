class Admin::QuotesController < ApplicationController

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
