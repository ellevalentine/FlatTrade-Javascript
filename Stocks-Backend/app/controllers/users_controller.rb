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
        byebug
        # @user = User.create(name: params[:name], user: params[:user])
        # render json: @user
    end

    def update
        
         byebug
        # @user = User.find(params[:id])
        
        # @user.update(name: params[:name], user: params[:user])
        # render json: @user
       
    end


    def destroy

        byebug

        # @user = User.find(params[:id])
        # @user.delete
        # render json: @user

    end
end
