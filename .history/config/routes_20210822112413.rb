Rails.application.routes.draw do
  get '/'=>"home#top"
  get "home/profile"=>"home#profile"
  get "home/works"=>"home#works"
  get "home/more"=>"home#mo"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
