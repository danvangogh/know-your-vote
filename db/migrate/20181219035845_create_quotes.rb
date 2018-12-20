class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.text :text
      t.references :party, foreign_key: true

      t.timestamps
    end
  end
end
