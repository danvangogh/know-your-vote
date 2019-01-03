class Admin::QuotesController < ApplicationController

  http_basic_authenticate_with name: "admin", password: "asdf"

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
