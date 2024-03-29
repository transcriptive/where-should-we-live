import  "./Team.css"

const Team = () => {
    return(
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                  Meet the Team
              </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover-trigger">
                  <a href="https://www.linkedin.com/in/johndanaraymond/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/JohnR.jpg" alt="johnr"/>
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">John Raymond</p>
                          <p className="text-base text-gray-400 font-normal">Project Manager - Software Engineer</p>
                          <p className="text-left hover-target pt-2">
                              John is Software Engineer and Project Manager with interests in video games, travel, motorcycles, and biotechnology. 
                              He seeks to bring out the best in himself and others and always tries to provide as much support as possible to everyone on his team.
                          </p>
                      </div>
                  </a>
              </div>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                  <a href="https://www.linkedin.com/in/kevinurban/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/Urban-Kevin-Hoyt-112.jpg" alt="kevin" />
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">Kevin Urban</p>
                          <p className="text-base text-gray-400 font-normal">UX Team Lead - User Experience Strategist</p>
                      </div>
                  </a>
              </div>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                  <a href="https://www.linkedin.com/in/juliana-a/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/JulA.jpg" alt="julianna" />
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">Juliana Antoninus</p>
                          <p className="text-base text-gray-400 font-normal">Data Scientist</p>
                      </div>
                  </a>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover-trigger">
                  <a href="https://www.linkedin.com/in/christian-mosley/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/cmosley.jpg" alt="christian" />
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">Christian Mosley</p>
                          <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                          <p className="text-left hover-target pt-2">
                          Christian is a web developer from Fort Worth, TX. With a passion for business, sports and technology, 
                          Christian decided on a career change during COVID when he found the time to cultivate his passion for web development.
                          </p>
                      </div>
                  </a>
              </div>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover-trigger">
                  <a href="https://www.linkedin.com/in/renepacchaux/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/Rene'.jpg" alt="rene"/>
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">René Paccha</p>
                          <p className="text-base text-gray-400 font-normal">UX Designer</p>
                          <p className="text-left hover-target pt-2">
                              Rene is a UX designer advocating for early research while specializing in visual development of ideas a stakeholder goals.
                              He values performance based learning and structure-informed improvisation.
                              Enjoyed collab on a public good app.
                          </p>
                      </div>
                  </a>
              </div>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                  <a href="https://www.linkedin.com/in/max-freeborn/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/MaxF.jpg" alt="max"/>
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">Maxwell Scheinholtz</p>
                          <p className="text-base text-gray-400 font-normal">UX Designer</p>
                      </div>
                  </a>
              </div>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover-trigger">
                  <a href="https://www.linkedin.com/in/patricebrooks/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/patrice2.jpeg" alt="patrice"/>
                      </div>
                      <div className="text-center py-8 sm:py-6 ">
                          <p className="text-xl text-gray-700 font-bold mb-2">Patrice Brooks</p>
                          <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                          <p className="text-left hover-target pt-2">
                          Patrice is an Industrial Engineer by trade and always looking for ways to improve work for herself and others.
                          She is passionate about all things related to Product/Project Management and Software Engineering.
                          </p>
                      </div>
                  </a>
              </div>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover-trigger">
                  <a href="https://www.linkedin.com/in/john-bruscella/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/JohnB.jpg" alt="johnb"/>
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">John Bruscella</p>
                          <p className="text-base text-gray-400 font-normal">Data Scientist</p>
                      </div>
                  </a>
              </div>
              
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover-trigger">
                  <a href="https://www.linkedin.com/in/aaron-prince-409a1bbb/">
                      <div>
                          <img className="object-center object-cover h-auto w-full" src="/images/AaronP.png" alt="aaron"/>
                      </div>
                      <div className="text-center py-8 sm:py-6">
                          <p className="text-xl text-gray-700 font-bold mb-2">Aaron Prince</p>
                          <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                          <p className="text-left hover-target pt-2">
                              Aaron is a software engineer from Pooler Georgia. He has a long history of problem solving and working well under pressure. 
                              He likes fast cars, motorcycles, bass guitar and everything he can learn related to computers and technology
                          </p>
                    </div>
                  </a>
              </div>
          </div>
      </section>
    )
}
export default Team;