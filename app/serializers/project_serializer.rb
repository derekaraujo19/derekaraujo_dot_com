class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :screenshot, :title, :description, :deploy_link, :github_link, :demo_link, :tech_used
end
