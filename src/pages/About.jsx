import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
      <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
        we love
      </h1>
      <div className="stats bg-primary shadow">
        <div className="stat">
          <div className="stat-title text-primary-content font-bold tracking-widest text-4xl">
            <Link to="/">Comfy</Link>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg mx-auto leading-8 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure
        dolorem placeat perferendis qui atque aliquid tenetur sit, quo,
        praesentium, magnam exercitationem. Quod animi eligendi iste dolores
        facilis aliquid beatae Quis iure dolorem placeat perferendis qui atque
        aliquid tenetur sit, quo, Quod animi eligendi iste dolores facilis
        aliquid beatae Quis iure dolorem!
      </p>
    </div>
  )
}

export default About
