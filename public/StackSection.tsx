"use client"

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

const StackSection = () => {
  return (
    <section className='mb-40'>
        <div className="max-w-7xl mx-auto px-4">
            <div className='flex justify-between mb-20'>
                <h2 className='text-3xl font-bold mb-2'>Tech Stack & Expertise</h2>
                <p className='text-slate-800 text-xs max-w-lg text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime deserunt fugiat excepturi et itaque.</p>
            </div>

            <Carousel opts={{ loop: true}} plugins={[
              Autoplay({
                delay: 1900,
                stopOnInteraction: false,
              })
            ]}>
              <CarouselContent>

                <CarouselItem className="basis-1/5 flex justify-between items-center">
                  <Image src="/Git..png" alt='git' width={80} height={80} />
                </CarouselItem>

                <CarouselItem className="basis-1/5 flex justify-between items-center">
                  <Image src="/javascript.webp" alt='js' width={80} height={80} />
                </CarouselItem>

                <CarouselItem className="basis-1/5 flex justify-between items-center">
                  <Image src="/react2.png" alt='react' width={80} height={80} />
                </CarouselItem>

                <CarouselItem className='basis-1/5 flex justify-between'>
                  <Image src='/tailwind1.png' alt='tailwind' height={50} width={50}></Image>
                </CarouselItem>

                <CarouselItem className='basis-1/5 flex justify-between items-center'>
                  <Image src="/axios.png" alt='axios' height={80} width={80}></Image>
                </CarouselItem>

                <CarouselItem className='basis-1/5 flex justify-between items-center'>
                  <Image src="/shadcn.png" alt='shadcn' height={80} width={80}></Image>
                </CarouselItem>

                <CarouselItem className='basis-1/5 flex justify-between items-center'>
                  <Image src="/redux.png" alt='redux' height={80} width={80}></Image>
                </CarouselItem>

            </CarouselContent>
            </Carousel>
        </div>
    </section>
  )
}

export default StackSection