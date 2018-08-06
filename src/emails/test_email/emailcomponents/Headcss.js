const Headcss = () => {
	return(
		`.address a {
      color:inherit !important;
      text-decoration: none !important;
    }
    div, td {
      font-smoothing: antialiased !important;
      -moz-font-smoothing: antialiased !important;
      -webkit-font-smoothing: antialiased !important;
    }
    #outlook a {
      padding: 0;
    }
    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    .ExternalClass * {
      line-height: 100%;
    }
    html, body {
      	min-width: 100%;
        width:100%;
        font-family: Avenir-Regular, Avenir, Helvetica, arial, sans-serif;
    }
    body {
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin:0 auto !important;
        width:100%;
        min-width:100%;
    }
    table, td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        overflow:hidden;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    div[style*='margin: 16px 0'] {
        margin:0 auto !important;
    }
    @font-face {
      font-family: 'Avenir-Regular';
      src: url('https://s3.amazonaws.com/dsc-misc/site/fonts/avenir-regular.woff') format('woff'), url('https://s3.amazonaws.com/dsc-misc/site/fonts/avenir-regular.tff') format('tff'), url('https://s3.amazonaws.com/dsc-misc/site/fonts/avenir-regular.ttf') format('truetype'), url('https://s3.amazonaws.com/dsc-misc/site/fonts/avenir-regular.svg') format('svg');
      mso-font-alt: 'Arial';
      font-weight: normal;
    }
    @font-face {
      font-family: 'Prumo-Medium';
      src: url('https://s3.amazonaws.com/dsc-misc/site/fonts/prumo-medium.woff') format('woff');
      mso-font-alt: 'Georgia';
      font-weight: normal;
    }

  /*Two column layout*/
    .two-column {
        text-align: center;
        font-size: 0;
    }
    .two-column .column {
        width: 100%;
        vertical-align: top;
        margin:0 auto;
        box-sizing:border-box;
    }
    .three-column {

        display:inline-block;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
          .three-column { max-width:32% !important; } /* your css rules for ipad portrait */
    }

    @media only screen and (max-width:481px) {
        .mobile-width-adjust {
            width:85% !important;
        }
        .mobile-width-adjust2 {
            max-width:230px !important;
        }
         .two-column div {
     		max-width:80% !important;
            width:80% !important;
        }
        .adjust-width {
     		max-width:100% !important;
            width:100% !important;
        }
        .three-column .column {
            max-width:95% !important;
        }
        div.column td img {
            max-width:100% !important;
        }
        .three-column {
              max-width:93% !important;
        }
        .three-column td img {
            max-width:93% !important;
        }
        .alncenter {
            text-align: center !important;
        }
        .mobile-show{
        	display:block !important;
        }
    }
  /* stop iOS from turning into blue hyperlinks */
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;}`.trim()
	);
}
export default Headcss;
