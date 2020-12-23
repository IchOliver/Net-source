// Dependencies.
import { useEffect } from 'react'

// Use Intercom.
export const useIntercom = () => {

  // Did Mount.
  useEffect(() => {

    const WINDOW = typeof window !== 'undefined' && window as any
    if (!WINDOW) return
    WINDOW.intercomSettings = {app_id: 'vu0wurdl'}

    function init() {
      // @ts-ignore
      var w=window as any;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/cec5330n';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}
    }
    init()
    
  }, [])

}