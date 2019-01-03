class Admin::TopicsController < ApplicationController

  http_basic_authenticate_with name: "admin", password: "asdf"

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
