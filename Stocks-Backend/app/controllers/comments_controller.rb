class CommentsController < ApplicationController

    def index 
        @comments=Comment.all
        render json: @comments
    end

    def show

        @comment = Comment.find(params[:id])
        render json: @comment
    
    end

    def create
        # byebug
        @comment = Comment.create(name: params[:name], comment: params[:comment])
        render json: @comment
    end

    def update
        
        #   byebug
        @comment = Comment.find(params[:id])
        
        @comment.update(name: params[:name], comment: params[:comment]) # grab the likes from the params sent
        render json: @comment
       
    end


    def destroy

        # byebug

        @comment = Comment.find(params[:id])
        @comment.delete
        render json: @comment

    end



end
