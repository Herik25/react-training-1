import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const imgLink = "https://getwallpapers.com/wallpaper/full/c/b/2/1184187-gorgerous-healthy-food-wallpaper-1920x1080.jpg"
  const name = "this is pizza"
  const date = "2022-12-12"
  const body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe placeat est autem voluptatibus? Unde, omnis esse. Magnam illum, eum libero necessitatibus ipsa eaque velit natus. Ullam delectus a inventore quae blanditiis ipsam sequi consequatur. Facilis, excepturi nam sit eveniet, provident soluta dolores, velit aut laborum fugit"
  return (
    <div style={{ display: 'flex'}}>
      <Card image="https://th.bing.com/th/id/OIP.iZmRJpSySKsI7x8gUlTSyAHaEz?rs=1&pid=ImgDetMain" heading="This are Vagitables" body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe placeat est autem voluptatibus? Unde, omnis esse. Magnam illum, eum libero necessitatibus ipsa eaque velit natus. Ullam delectus a inventore quae blanditiis ipsam sequi consequatur. Facilis, excepturi nam sit eveniet, provident soluta dolores, velit aut laborum fugit reprehenderit alias voluptatum maiores?" date="2022-12-12" />
      <Card image="https://th.bing.com/th/id/R.913becf9f884742c3bae5764e35ae12b?rik=zxv5oidL7n59fQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f9%2f7%2f494243.jpg&ehk=jbHEDfWJ%2fvfSK7S0gPqDY4mLwcyroJZp5ma9w4jrfOw%3d&risl=&pid=ImgRaw&r=0" heading="this is fast food" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et ut ab voluptatem? Aliquid debitis iste nobis alias possimus veniam delectus nihil autem odit vero suscipit fugiat aliquam quam, voluptas architecto temporibus aspernatur minus ad ipsa nostrum eveniet sed minima, distinctio qui. Error, porro nobis mollitia harum qui possimus consequatur?" date="12345" />
      <Card image={imgLink} heading={name} date={date} body={body} />
    </div>
  )
}

export default App
