import {createGlobalStyle} from 'styled-components'

export const AboutPageStyle = createGlobalStyle`
 @font-face {
    font-family: Eina02-Bold;
    src: url('/fonts/Eina02-Bold/font.woff2') format('woff2'), url('/assets/fonts/Eina02-Bold/font.woff') format('woff');
  }
  @font-face {
    font-family: Eina01-Regular;
    src: url('/fonts/Eina01-Regular/font.woff2') format('woff2'), url('/assets/fonts/Eina01-Regular/font.woff') format('woff');
  } 
  .landingPage {
    .f-r-t {
      font-family: Rubik, sans-serif!important;
    }
    .Eina01-regular{
        font-family: Eina01-Regular!important;
    }
    .Eina01-bold{
        font-family: Eina02-Bold!important;
    }
    .bg-button-1 {
        background-image: linear-gradient(to right, #fd8361 2%, #feaf49);
    }
    .bg-b-1 {
        border-color: #feaf49;
    }
    .brid_text{
       line-height:1.2;
   
    }
    .border-radius-btn {
        border-radius: 15px;
    }

    .hero1-1 {
        width: 60.75rem;

        @media (max-width: 640px) {
            width: 100%;
        }
    }

    .hero1 {
        width: 60.75rem;
        @media (max-width: 640px) {
            width: 100%;
        }
    }
    .hero2 {
        width: 45.813rem;
        @media (max-width:640px){
            width:100%;
        }
    } 
    .hero1-sm{
        width:100%
    }

    .hero2-content{
        width:70%;
        @media (max-width:640px){
            width:100%;
        }
    }
    .double-image{
        margin-top:350px;
        @media (max-width: 640px) {
            margin-top:40px;
        }
    }
 
    .heading-line {
        line-height: 72px;
    }
    .heading-line2 {
        line-height: 36px;
    }
    .text-custom-black {
        color: #303030;
    }
    .text-brid-title{
        width:69%;
        @media (max-width: 640px) {
           width:56%;
        }
    }
    .text-black2 {
        color: #474747;
    }
    .bg-dark-green {
        background-color: #6af7b1;
    }
    .border-dark-green {
        border: solid 3px #6af7b1;
    }
    .leading-form{
        border-radius: 7px;
    }
    .bg-green {
        background-color: #b1ddb2;
    }
    .bg-teal {
        background-color: #0a86a5;
    }
    .text-teal {
        color: #0a86a5;
    }
    .border-view{
        border-color: #0a86a5;
    }
    .border-teal {
        border-color: #0a86a5;
        justify-content:center;
        display:flex;
        align-items:center;
        height:600px;
        @media (max-width:640px){
            height:250px;
        }
    }
    .heroImg {
        height: 500px;
    }
    .imgsec1 {
        height: 716px;
    }
    .bg-green-body {
        background-image: linear-gradient(to bottom, #e3fff7, #ffffff);
    }
    .cardWidthandHeight {
        width: 451px;
        height: 543px;
        border-radius: 20px;
        box-shadow: 0 2px 12px 1px rgba(151, 151, 151, 0.5);
    }
    .cardWidthandHeight2 {
        width: 345px;
        height: 345px;
        border-radius: 20px;
        box-shadow: 0 2px 12px 1px #b2b2b2;
    }
    .text-dark-blue {
        color: #414f7b;
    }
    .w-para {
        width: 38rem;
    }
    .img-cta {
        width: 600px;
        height: 600px;
    }
    .bg-sec6 {
        background-color: #e8f8e8;
    }
    .section6 {
        height: 1133px;
    }
    .bg-oval {
        height: 750px;
        margin-left: -460px;
    }

    .input-width {
        width: 580px;
        height: 60px;
    }
    .input-width-btn {
        width: 580px;
        height: 100px;
    }
    .footer {
        background-color: #e6fff8;
    }
    .imgsec3 {
        height: 1269px;
    }
    .b-r {
        border-radius: 20px;
        box-shadow: 0 2px 12px 1px rgba(151, 151, 151, 0.5);
    }
    .form-card{
          background-position: left;
          background-repeat: no-repeat;
            background-size: 100% 100%
    }

    /* Font Size */
    .font-s {
        font-size: 0.625rem;
    }
    .text-2-5xl {
        font-size: 1.625rem;
    }
    .text-6-5xl {
        font-size: 4.375rem;
    }
    .text-s {
        font-size: 0.5rem;
    }
    .text-ss {
        font-size: 6px;
    }
    .carousel__inner-slide{
        display: flex;
        justify-content: center;
    }
    .carousel__dot-group{
        display: flex;
        justify-content: center;
    }
    .carousel__dot.carousel__dot--selected{
        background-color: #0a86a5;
    }
    .carousel__dot{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(156, 163, 175);
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .carousel__dot span{
        display: none;
    }
    
  }
  .tri-distance{
      
      position:absolute;
      margin-left:430px;
      margin-top:20px;
      @media (max-width:640px){
          margin-left:150px;
          width:20px;
          height:20px;
          top:0;
          margin-top:0px;
      }
  }
  .line-green{
      width:200px;
      height:15px;
      position:absolute;
      margin-left:0px;
      margin-top:5px;
      @media (max-width:640px){
          width:100px;
          margin-top:20px;
          height:8px;
          margin-left:0px;
          top:0;
         
      }
  }
.connted-title{
    width:80%;
    font-size:40px;
    @media (max-width:640px){
        width:70%;
        font-size:20px;
    }
}
  .first-title{
      margin-top:0px;
      @media (max-width:640px){
          margin-top:40px;
      }
  }
  .title-height{
      line-height:30px
  }
  .complete-text{
      font-size:32px;
  }
  .help-background{
    background-image:url('/images/help-background.png');
    background-repeat: no-repeat; 
    background-size:cover;
    height:200vh;
    @media (max-width:640px){
        height:220vh;
    }
  }
  .helping-title{
      width:100%;
      justify-content:center;
      align-items:center;
      display:flex;
      @media (max-width:640px){
          width:70%;
      }
  }
  .help-title{
      width:100%;
      display:flex;
      justify-content:center;
      padding-top:50px;
      @media (max-width:640px){
        width:77%;
    }
  }
  .help-description{
    display:flex;
    justify-content:center;
    padding-top:40px;
  }
   .description{
       width:33%;
       @media (max-width:640px){
           width:70%;
       }
   }
   .way-layout{
    width:100%;
    display:flex;
    justify-content:center;
    padding-top:230px;
    margin-top:230px;
    @media (max-width:640px){
        display:block;
        padding-top:0;
        margin-top:0;
    }
}
.card1{
   margin-right:50px;
   display:block;
   justify-content:center;
   border-radius:40px;
   padding:40px;
   background-color:white;
   @media (max-width:640px){
       padding:20px;
       margin-left:20px;
       margin-right:20px;
       margin-top:20px;
   }
}
.quality-text{
    font-size:40px;
    width:100%;
    justify-content:center;
    display:flex;
    align-items:center;
    @media (max-width:640px){
        width:70%;
        font-size:30px;
    }
}
.card2{
    margin-left:50px;
    display:block;
    justify-content:center;
    border-radius:40px;
    padding:40px;
    background-color:white;
    @media (max-width:640px){
        padding:20px;
        margin-left:20px;
        margin-right:20px;
        margin-top:20px;
    }
}
.their-card-layout{
    margin-top:20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius:30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.their-card-content{
    display:flex;
    padding:20px;
    justify-content:flex-start;
    align-items:center;
   
}
.source-card-layout{
    margin-top:20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius:30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.source-card-content{
    display:flex;
    padding:20px;
    justify-content:flex-start;
    align-items:center;
}
.card-title-color{
    color:#474747;
    font-size:20;
}
.meet-background{
    background-image:url('/images/back-fade.png');
    background-repeat: no-repeat; 
    background-size:cover; 
}
.help-video{
    bottom:-300px;
    @media (max-width:640px){
        bottom:-250px;
    }
}
.meet-margin{
    padding-top:500px;
    @media (max-width:640px){
        padding-top:300px;
    }
}
.test-video{
    width:1000px;
    background-color:black;
    justify-content: center;
    display: flex;
    align-items: center;
    height:600px;
    @media (max-width:640px){
        height:250px;
    }

   
}
.play-icon{
    background-size:cover;
    postion:absolute;
    top:200px;
    @media (max-width:640px){
        width:100px;
        height:100px;
    }
}
   
`