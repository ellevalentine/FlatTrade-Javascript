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

end
