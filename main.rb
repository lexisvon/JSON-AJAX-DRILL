require "sinatra"
require "sinatra/reloader"

get "/" do
    erb :home
end

get "/people" do
    erb :info
end
