class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :artist, :credits, :spotify_link
end
