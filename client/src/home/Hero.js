//import Footer from '../../public/main.jpg'
const Hero = () => {
    return (
        <section class="text-gray-400  body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">EduTracker
        <br class="hidden lg:inline-block"/>is the one solution to many problems
      </h1>
                        <p class="mb-8 leading-relaxed text-black">EduTracker solves most of the problem that every student faces in their online classes</p>
                        <div class="flex justify-center">
                            <a class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="/login">login</a>
                            <a class="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg" href="/signup">SignUp</a>
                        </div>
    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src='https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_960_720.jpg' />
                    </div>
                </div>
</section>
    )
}
export default Hero;