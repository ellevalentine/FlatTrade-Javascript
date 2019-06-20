class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :name
      t.integer :price
      t.integer :change
      t.integer :quantity
      t.integer :user_id

      t.timestamps
    end
  end
end



