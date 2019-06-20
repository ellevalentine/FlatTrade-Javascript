class StocksController < ApplicationController
    def index 
        @stocks=Stock.all
        render json: @stocks
    end

    def create

        # byebug
        @stock = Stock.create(name: params[:name], price: params[:price], change: params[:change], quantity: params[:quantity], user_id: params[:user_id] )
        render json: @stock
    end

    def update
        
         byebug
        # @stock = Stock.find(params[:id])
        
        # @stock.update(name: params[:name], img_url: params[:img_url])
        # render json: @stock
       
    end


    def destroy

        byebug

        # @stock = Stock.find(params[:id])
        # @stock.delete
        # render json: @stock

    end


end
