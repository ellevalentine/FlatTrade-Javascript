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
        byebug
    end


    def destroy

        # byebug

        @comment = Comment.find(params[:id])
        @comment.delete
        render json: @comment

    end



end
