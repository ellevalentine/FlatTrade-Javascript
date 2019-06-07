class StocksController < ApplicationController
    def index 
        @stocks=Stock.all
        render json: @stocks
    end

    def update

        # byebug
        # user = User.find_by(id: params[:user][:id].to_i)  # grab the id from the params sent 
        # if user
        #     user.update(likes: params[:user][:likes]) # grab the likes from the params sent
        #     render json: user
        # end
    end


end
