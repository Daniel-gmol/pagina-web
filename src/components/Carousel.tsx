import React, {useState, useEffect, useRef} from 'react'
import Card from '@/components/Card'

function Carousel() {
    //Array of cards data. Replace with data from API
    const cards = [
        {id: 1, title: 'Card 1', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 2, title: 'Card 2', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 3, title: 'Card 3', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 4, title: 'Card 4', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 5, title: 'Card 5', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 6, title: 'Card 6', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 7, title: 'Card 7', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'},
        {id: 8, title: 'Card 8', img: 'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'}
    ]

    // State to keep track of the current card index
    const [currentIndex, setCurrentIndex] = React.useState(0)

    // Function to go to the previous card
    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + cards.length) % cards.length);
    };

    // Function to go to the next card
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
    };

    // Calculate the number of indicator dots
    const numOfDots = Math.ceil(cards.length / 2);


  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-row justify-center gap-5'>
            {/* Button arrow left */}
            <button onClick={prevCard}>
                <div className='w-0 h-0
                border-t-[22px] border-transparent
                border-r-[35px] border-r-black
                border-b-[22px] border-b-transparent'>
                </div>
            </button>

            {/* Render visible the cards */}
            <div className="relative w-full overflow-hidden max-w-md">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                    {cards.map((card) => (
                        <div key={card.id} style={{ flex: '0 0 50%', padding: '0 10px' }}>
                            <Card cardClass='bg-secondary-grey' buttonClass='ra-gradient' 
                            title={card.title} img={card.img}
                            onCardClick={() => { window.location.href = '/menu'}}/>
                        </div>
                    ))}
                </div>
            </div>

            {/* Button arrow right */}
            <button onClick={nextCard}>
                <div className='w-0 h-0
                border-t-[22px] border-transparent
                border-l-[35px] border-l-black
                border-b-[22px] border-b-transparent'>
                </div>
            </button>
        </div>

        {/* Circles */}
        <div className='flex justify-center gap-4 mt-4'>
                {[...Array(numOfDots)].map((_, index) => (
                    <div key={index} className={`w-4 h-4 rounded-full ${currentIndex === index * 2 ? 'bg-primary' : 'bg-secondary-grey'}`}></div>
                ))}
        </div>
    </div>
  )
}

export default Carousel
