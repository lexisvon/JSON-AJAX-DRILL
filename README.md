# JSON-AJAX-DRILL
Here is some JSON: Click me!

Get a quick Sinatra application running with these files:

public/scripts.js - Leave this empty for now.

views/info.erb - Copy/Paste everything from the JSON above into this file.

views/home.erb

<!DOCTYPE html>
<html>
<head>
    <title>JSON/AJAX Drill 1</title>
    <script type="text/javascript" src="/scripts.js"></script>
</head>
<body>

</body>
</html>
main.rb

require "sinatra"

get "/" do
    erb :home
end

get "/people" do
    erb :info
end
You should be able to run that and access http://localhost:4567 and see a blank page. And http://localhost:4567/people should show you the JSON you copy/pasted.

Now your task is to write the JavaScript needed to show all of the people from the JSON on the homepage, but you may not edit the HTML at all. Use JavaScript to fetch the people, organize each person into some kind of <div> structure, and insert into the DOM each person's info. Don't worry about styling it--no CSS required.