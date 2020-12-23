import { createGlobalStyle } from 'styled-components'

export const LandingPageStyle = createGlobalStyle`
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
    .border-radius-btn {
        border-radius: 15px;
    }
    .hero1 {
        width: 54.75rem;
    }
    .hero2 {
        width: 45.813rem;
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
    .border-teal {
        border-color: #0a86a5;
    }
    .heroImg {
        height: 863px;
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
`;