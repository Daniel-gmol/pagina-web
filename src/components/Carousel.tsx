import React from 'react'
import Card from '@/components/Card'

function Carousel() {
    //Array of cards data. Replace with data from API
    const cards = [
        {id: 1, title: 'Card 1', img: 'Content 1'},
        {id: 2, title: 'Card 2', img: 'Content 2'},
        {id: 3, title: 'Card 3', img: 'Content 3'},
        {id: 4, title: 'Card 4', img: 'Content 4'},
    ]

    // State to keep track of the current card index
    const [currentIndex, setCurrentIndex] = React.useState(0)

    // Function to go to the previous card
    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 2 : prevIndex - 2))
    }


    // Function to go to the next card
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2 >= cards.length ? 0 : prevIndex + 2))
    }

    // Get the cards to be displayed
    const visibleCards = cards.slice(currentIndex, currentIndex + 2);

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
            {visibleCards.map((card) => (
                <Card key={card.id} title={card.title} content={card.img}/>  
                ))
            }

            {/* Button arrow right */}
            <button onClick={prevCard}>
                <div className='w-0 h-0
                border-t-[22px] border-transparent
                border-l-[35px] border-l-black
                border-b-[22px] border-b-transparent'>
                </div>
            </button>
        </div>

      {/* Circles */}
      <div className='flex justify-center gap-4 mt-4'>
            <div className={`w-4 h-4 rounded-full ${currentIndex == 0 ? 'bg-primary' : 'bg-secondary-grey'}`}></div>
            <div className={`w-4 h-4 rounded-full ${currentIndex == 2 ? 'bg-primary' : 'bg-secondary-grey'}`}></div>
      </div>
    </div>
  )
}

export default Carousel
