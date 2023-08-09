const express = require('express');
const axios = require('axios');
const newsR = express.Router();
require("dotenv").config();
const apikey = process.env.APIKEY;
// Add the body parsing middleware
newsR.use(express.urlencoded({ extended: true }));
newsR.use(express.json());

newsR.get('/',async(req,res)=>{
    try {
        var url = 'https://newsapi.org/v2/everything?' + 'q=news&language=en' + `&apiKey=${apikey}`;
        const news_get = await axios.get(url);
        // console.log(news_get.data.articles);
        res.render('index',{articles:news_get.data.articles}); // exporting data to news hbs
        // res.render('news',{articles:news_get.data.articles}); // exporting data to news hbs
    } catch (error) {
        if(error.response){
            console.log(error);
        }
    }
  });
newsR.get('/india',async(req,res)=>{
    try {
        var url = 'https://newsapi.org/v2/everything?' + 'q=india&language=hi' + `&apiKey=${apikey}`;
        const news_get = await axios.get(url);
        // console.log(news_get.data.articles);
        res.render('index',{articles:news_get.data.articles}); // exporting data to news hbs
        // res.render('news',{articles:news_get.data.articles}); // exporting data to news hbs
    } catch (error) {
        if(error.response){
            console.log(error);
        }
    }
  });
  newsR.post('/search',async(req,res)=>{
      const search=req.body.search
      console.log(req.body.search)
      try {
          var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/general',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=general" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/entertainment',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=entertainment" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/business',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=business" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/health',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=health" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/technology',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=technology" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/sports',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=sports" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/science',async(req,res)=>{
      try {
          var url =
        "http://newsapi.org/v2/top-headlines?" + "country=in&category=science" + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/hi',async(req,res)=>{
      try {
        var url = 'https://newsapi.org/v2/everything?' + 'q=india&language=hi' + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
  newsR.get('/en',async(req,res)=>{
      try {
        var url = 'https://newsapi.org/v2/everything?' + 'q=everything&language=en' + `&apiKey=${apikey}`;
          const news_get =await axios.get(url);
          res.render('index',{articles:news_get.data.articles});
      } catch (error) {
          if(error.response){
              console.log(error);
          }
      }
  });
    
  newsR.get;
  
  module.exports = newsR;