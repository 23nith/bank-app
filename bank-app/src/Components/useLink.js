import {useEffect} from "react";

const useLink = url => {
    useEffect(()=>{
      const link = document.createElement('link');
      link.href = url;
      link.async = true;
      link.rel = "stylesheet"
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      }
    }, [url])
  }

export default useLink;