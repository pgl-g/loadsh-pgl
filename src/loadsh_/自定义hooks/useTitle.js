import { useEffect } from 'react';



const useTitle = useEffect(() => {
  document.title = title;
}, []);


export default useTitle;