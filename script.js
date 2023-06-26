/*Gives us a nodelist similar to an array */
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment  = target / 200
        /*To not pass the target*/
        if(c < target)
        {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        }else {
            /*to not go above the target*/
            counter.innerText = target
        }
    }

    updateCounter()
})

counters.foreach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        
        const increment  = target / 200
        /*To not pass the target*/
        if(c < target)
        {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        }else {
            /*to not go above the target*/
            counter.innerText = target
        }

    }
})