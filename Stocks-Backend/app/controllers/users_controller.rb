class UsersController < ApplicationController


    def index 
        @users=User.all
        render json: @users, include: :stocks
    end

    def show

        @user = User.find(params[:id])
        render json: @user
    
    end

    def create
        # byebug
        @user = User.create(name: params[:name], img_url: params[:img_url], profit: 100)
        render json: @user
    end

    def update
        
        #  byebug
        @user = User.find(params[:id])
        
        @user.update(name: params[:name], img_url: params[:img_url])
        render json: @user
       
    end


    def destroy

        byebug

        # @user = User.find(params[:id])
        # @user.delete
        # render json: @user

    end
end
