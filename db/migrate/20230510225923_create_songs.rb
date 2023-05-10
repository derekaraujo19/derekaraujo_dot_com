class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :year
      t.string :artist
      t.string :credits
      t.string :spotify_link

      t.timestamps
    end
  end
end
