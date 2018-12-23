class AddImageUrlToParties < ActiveRecord::Migration[5.1]
  def change
    add_column :parties, :Image_Url, :string
  end
end
