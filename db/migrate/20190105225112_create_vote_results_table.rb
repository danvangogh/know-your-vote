class CreateVoteResultsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :vote_results do |t|
      t.integer :grn
      t.integer :ndp
      t.integer :lib
      t.integer :cp

      t.timestamps
    end
  end
end
