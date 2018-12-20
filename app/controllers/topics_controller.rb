class TopicsController < ApplicationController

  def index
    @topics = Topic.all
    render json: @topics
  end

  def show
  end

end
