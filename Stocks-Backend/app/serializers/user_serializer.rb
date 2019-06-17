class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profit, :img_url, :stocks
end
