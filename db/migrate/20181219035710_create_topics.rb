class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :name
      t.text :description
      t.text :good
      t.text :bad

      t.timestamps
    end
  end
end
