class AddPhotoColumnToTopics < ActiveRecord::Migration[5.1]
  def change
    add_column :topics, :photo_url, :string
  end
end
