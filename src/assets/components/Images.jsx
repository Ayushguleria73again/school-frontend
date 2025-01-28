import { useEffect, useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Images() {
    const [state, setstate] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => setstate(json))
            .catch(err => console.log(err)
            )
    }, [])


    return (

        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {state.map((photos) => {
                    const { title, image } = photos
                    return (
                        <>
                            <div className="group cursor-pointer relative">
                                <LazyLoadImage
                                    effect="blur"
                                    src={image}
                                    alt={title}
                                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                        View
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default Images