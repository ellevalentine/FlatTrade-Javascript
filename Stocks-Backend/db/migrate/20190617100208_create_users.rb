class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :profit
      t.string :img_url

      t.timestamps
    end
  end
end
