// App.js

import React from 'react';
import './App.css'; // You can style this component
import PhotoFrame from './PhotoFrame';

function App() {
    const giphy1 = `<iframe src="https://giphy.com/embed/l1J9C7tZSbwmuuN6o" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    <p><a href="https://giphy.com/stickers/birthday-happy-l1J9C7tZSbwmuuN6o"></a></p>`;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="birthday-heading">HAPPY BIRTHDAY PURNIMA MY LOVE</h1>
        <div className="birthday-wish">
          <h2>💕💕💕💕💕💕🎂🎂🎂🎂🎂🎂💕💕💕💕💕💕</h2>
          <p>❤️❤️❤️❤️ Celebrating your special day with love and joy! I LOVE YOU ❤️❤️❤️❤️</p>
          <div dangerouslySetInnerHTML={{ __html: giphy1 }} />
        </div>
        <div className="photo-container">
          <PhotoFrame
            year="1st Dating"
            photo="https://firebasestorage.googleapis.com/v0/b/hello-app-ebcf1.appspot.com/o/wishig_img%2F1st%20dating.jpg?alt=media&token=b598bc2f-700f-4cf2-b839-92819700cea9"
            text="তোমায় পেয়ে আমার জীবন, 
            ধন্য হয়ে গেছে.
            তোমার আমার ভালবাসার, 
            দীপ আজ জ্বলছে"
          />
          <>- </>
          <PhotoFrame
            year="2nd Dating"
            photo="https://firebasestorage.googleapis.com/v0/b/hello-app-ebcf1.appspot.com/o/wishig_img%2F2nd%20dating.jpg?alt=media&token=e944ebf4-da63-4139-a14f-d64c9364f61a"
            text="5 বছর কেটে গেল, 
            বাড়লো মোমবাতি.
            কালো ছিলাম আজও আছি, 
            তোমার কাছাকাছি।"
          />
          <>- </>
          <PhotoFrame
            year="3rd Dating"
            photo="https://firebasestorage.googleapis.com/v0/b/hello-app-ebcf1.appspot.com/o/wishig_img%2F3rd%20dating.jpg?alt=media&token=65a49524-cbce-4f22-9e84-571684cbaf6a"
            text="তোমার জীবন প্রতিমুহূর্তে, 
            হয়ে উঠুক রঙিন .
            ভালোবেসে জানাই তোমায় ,
            শুভ জন্মদিন"
          />
          <>- </>
           <PhotoFrame
            year="4rd Dating"
            photo="https://firebasestorage.googleapis.com/v0/b/hello-app-ebcf1.appspot.com/o/wishig_img%2F4th%20dating.jpg?alt=media&token=c7be7e36-7b7d-4e18-9349-2770e645607a"
            text="তুমি আমার সবচেয়ে নিকটস্থ ব্যক্তি। আমি আশা করছি তোমার এই জন্মদিনটি তোমাকে সবকিছু যে তুমি চাও তা দেবে। শুভ জন্মদিন! I LOVE YOU 😘"
          />
          {/* Add more PhotoFrames for subsequent years */}
        </div>
    
      </header>
    </div>
  );
}

export default App;
