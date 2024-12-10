```javascript
//pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [componentExists, setComponentExists] = useState(false);

  useEffect(() => {
    //Check if client side component exists
    setComponentExists(true);
  }, []);

  if (!componentExists) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}
```