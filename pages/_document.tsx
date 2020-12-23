// Dependencies.
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

// Document.
class Document extends NextDocument {

  // Get Initial Props.
  static async getInitialProps (context) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      
      context.renderPage = () => originalRenderPage({enhanceApp: Application => props => sheet.collectStyles(<Application {...props}/>)})
      const initialProps = await NextDocument.getInitialProps(context)
      return {...initialProps, styles: <>{initialProps.styles} {sheet.getStyleElement()}</>}

    } finally {sheet.seal()}

  }

}

// Export.
export default Document