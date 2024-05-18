"use client"


import { useEffect } from "react"

export default function Pull(props) { 
        useEffect(()=> {
        function zoom() {
            document.body.style.zoom = "125%" 
        }

        zoom()
    })
    return(<>

    </>)
}
