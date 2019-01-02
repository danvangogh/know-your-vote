class TopicsController < ApplicationController

  def show
    @topic = Topic.find(params[:id])
    render json: @topic
  end

  def index
    @topics = Topic.all
    render json: @topics
  end

  def create
    @topic = Topic.new(topic_params)

    @topic.save
    render json: @topic
  end

private

  def topic_params
    params.require(:topic).permit(:name, :description, :good, :bad)
  end

end
