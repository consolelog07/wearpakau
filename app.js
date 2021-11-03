const navslide=()=>{
    console.log('hiii')
    const burger=document.querySelector('.burger')
   
    const navlinks=document.querySelector('.navlinks')
    const nimish=document.querySelector('.nimish')
    const closebutton=document.querySelector('.closebutton')

    burger.addEventListener('click',()=>{
        console.log('clicked outer')

        navlinks.classList.toggle('navactive')
        closebutton.classList.toggle('showclosebutton')
        document.body.style.overflow='hidden'
        nimish.style.display="block"
        // nimish.classList.add('nimishdisappear')

    })
    closebutton.addEventListener('click',()=>{
        console.log("closeclicked")
        navlinks.classList.toggle('navactive')
        closebutton.classList.toggle('showclosebutton')
        document.body.style.overflow='visible'
        nimish.style.display="none"
    })
}
navslide()

const togglemodal=()=>{
    console.log("modal ")
    const modal=document.querySelector('.modalcontainer')
    const modalclosebtn=document.querySelector('.closemodal')
    const customiseqrbtn=document.querySelector('.customiseproduct')
    modalclosebtn.addEventListener('click',()=>{
        modal.style.display='none'
    })
    customiseqrbtn.addEventListener('click',()=>{
        modal.style.display='block'
    })

}
togglemodal()