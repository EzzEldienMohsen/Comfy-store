import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

var imageCarousel = [
  { id: 1, url: hero1 },
  { id: 2, url: hero2 },
  { id: 3, url: hero3 },
  { id: 4, url: hero4 },
]

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          We’re changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab optio
          eaque minima tempora sapiente quae cum blanditiis labore? Reiciendis,
          atque. Sapiente, tempore aperiam illum officiis veniam necessitatibus,
          aut nihil dolorem repellat libero voluptatem perferendis quo
          voluptates labore laudantium excepturi!
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary capitalize">
            our products
          </Link>
        </div>
      </div>
      <div className="hidden lg:carousel carousel-center h-[28rem] p-4 space-x-4 bg-neutral rounded-box">
        {imageCarousel.map((image) => {
          return (
            <div key={image.id} className="carousel-item">
              <img
                src={image.url}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
