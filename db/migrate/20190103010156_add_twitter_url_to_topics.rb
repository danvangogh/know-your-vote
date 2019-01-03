class AddTwitterUrlToTopics < ActiveRecord::Migration[5.1]
  def change
    add_column :topics, :twitter_url, :string
  end
end
