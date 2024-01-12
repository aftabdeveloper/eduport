const Logo = ({tagline=false})=>{
    return (
        <>
         <img src="./images/logo.svg" alt="logo" className="w-[120px]" />
             {
              tagline && 
              <p className="text-gray-500">Eduport education theme, built specifically <br />
                for the education centers which is dedicated <br />
                to teaching and involve learners
             </p>
            }
         </>
    )

}

export default Logo