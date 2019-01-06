class TopicsController < ApplicationController

  def show
    @topic = Topic.find(params[:id])
    render json: @topic
  end

  def index
    @topics = Topic.all
    render json: @topics
  end

  private

  def topic_params
    params.require(:topic).permit(:name, :description, :good, :bad, :photo_url, :twitter_url)
  end


end
