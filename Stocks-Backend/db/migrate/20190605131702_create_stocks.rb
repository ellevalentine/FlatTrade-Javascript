class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :name
      t.string :price
      t.integer :user_id

      t.timestamps
    end
  end
end
