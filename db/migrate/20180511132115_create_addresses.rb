class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :city
      t.string :state
      t.references :contact, foreign_key: true

      t.timestamps null: false
    end
  end
end
