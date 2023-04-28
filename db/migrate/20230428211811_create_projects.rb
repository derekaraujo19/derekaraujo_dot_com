class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :screenshot
      t.string :title
      t.string :description
      t.string :deploy_link
      t.string :github_link
      t.string :demo_link
      t.string :tech_used

      t.timestamps
    end
  end
end
