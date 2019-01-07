class Admin::TopicsController < ApplicationController

  http_basic_authenticate_with name: ENV['ENV_USERNAME'], password: ENV['ENV_PASSWORD']


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

  def destroy
    @topic = Topic.find(params[:id])
    @topic.destroy
  end

  private

  def topic_params
    params.require(:topic).permit(:name, :description, :good, :bad, :photo_url, :twitter_url)
  end

end
