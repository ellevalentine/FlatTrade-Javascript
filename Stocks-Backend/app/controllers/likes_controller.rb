class LikesController < ApplicationController
    
    def index 
        @likes=Like.all
        render json: @likes
    end

    def show

        @like = Like.find(params[:id])
        render json: @like
    
    end


    def update
        
        #   byebug
        @like = Like.find(params[:id])
        
            @like.update(likecount: params[:likecount].to_i) # grab the likes from the params sent
            render json: @like
       
    end
end
