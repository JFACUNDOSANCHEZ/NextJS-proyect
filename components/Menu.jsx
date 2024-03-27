import React from 'react'

const menu = [{name:'Inicio', img:'https://cdn-icons-png.flaticon.com/512/107/107122.png'}, {name:'Buscar', img:'https://cdn-icons-png.freepik.com/512/5525/5525279.png'}, {name:'Explorar', img:'https://w7.pngwing.com/pngs/904/666/png-transparent-computer-icons-explore-miscellaneous-angle-symbol-thumbnail.png' }, {name:' Reels', img:''},{name:'Mensajes', img:'https://cdn-icons-png.flaticon.com/512/5883/5883507.png'}, {name:'Crear',img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUAAAD///8dHR0ZGRmoqKjp6em+vr739/cRERFJSUmEhIT29vaUlJRpaWkICAiAgIAuLi7Nzc26urrk5OTZ2dlCQkLw8PCRkZHMzMybm5tzc3NmZmZNTU07OzuIiIgTExMqKipS9uEuAAAEuElEQVR4nO2dbXeqMAyAqUBBEEVl8zod7v//yqtzOJSWF6UJyfJ8vveY50Bpm3aJpwYShTrYZcfcj5ceHMvYz4/ZLtBhNDRgb8g/3upkDqhlZr7abN0Yrss3bLkbb8m/sQ2LBPKd7MWqGM8wCj6xdYzkQTqKYbjzsVWsxGX4smFaYlt0kLy/ZrjAFujB7gVDPd33s85JP2kYHrBD782hZTjaDTfYYQ9iM9gwzbBjHkhmmzkshkWOHfFgviwrALOhxg73KcxvqtFwjx3rk+z7Gq6wI32aVT/DD+w4X+CjjyG1j+g9Wbch5Sd4ofEUHw3pjsGKx7H4YEj1K1pn32ZIa6VmY2M3LLBjG4nCZph+YYc2EnlkMaQ9T9TJzIY8BuGVjckwxI5qVEKDIZ0dfR8OTUOaGyY7umFII+nUn9OjIYW04TAW94YpdjwOSO8ME+xwHFDWDXnNFBVhzXCHHYwTdr+GaYwdjBPi6GYYYMfiiOBmOM0D0Nf5rAy5bAubFD+GHKeKK8mP4eQuIYzG8mr4DzsOh6y/Dad+Uv8K5bfhdC4Cjc/bxXCLHYVTtmdDTumZJvpsyHeuuJCcDfFvG7pkrrwIOwbHRB7PreEvocctx/aI9rjunCoCj+f2/peFB3oc4y/W4XoBmprNvCPgr1UH0JBT8NEDvN5V5WhB88+5B/fKzH9PvACXGTMPLs1Wv+cKN0fFHtwGv34h+x3sVwETGDNVZwb3w2CIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxjSRwzpI4b0EUP6iCF9xJA+YkgfMaSPGNJHDOnj3xnSKFIxG4Kf3xnm/qD/jaE3110FfMfkXYP/8VJH8V4HANcmScAFgYvl+d3xOADy67ToDscBkO/pGsVwDWjYXevdBZB/SMj/GfIfhzjf0hOgIf/58A+saf7AuvQC873FYCjuD4fBf48vhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxjSRwzpI4b0EUP6iCF9xJA+YkgfMXQG/7r6/Hsj8O9vwb9HCf8+M/x7BfHv98S/Zxf/vmv8e+fx73/IvIfl8U/0IeXfS5Z/P2D+PZ3/QF9u/r3VFWB7OWBidTXkO18kP4YFdiDOKH4M1Sd2JI74VJUh1x1UcDOM4BJukJyim6HiudG/VkW4GvLcJIY1Q5YTRqnqhil2OA5I7wzh62o4p8o/V4bsyjjcjrpuhtxybrphqA7YMY3KQTUNec0YocGQVcJmo0yGCvSQximZMhumgGeJTskjiyGbjWKhbIZMhqJWdkO1x45uBPaqzRC67JsDVqrdUH1gR/giH49CDUPic0bW8Gkakn6KjSdoNCQ8Fh/HoM2Q7Bd1b5IxGhLdSm2MLmZDVdBbwOWFWcViqCJqn9QsspjYDKmt4MxvaLuheqfzGA8t5bdbDM8fHBq3sU+6TaLVkEaSsaP0doehSqd+yp90lTPuMlQq3E03lRrvuuvfdxueZ45gmkeoeZD2iL6P4ZminNoR4zKxzPBPGp5Zl9O5WvRW9u9d0N/wzFaX+DcZj6vNdkjQgwwvRKEOFtkx92PIazjLeJYfs0WgQ9vizMp/SSIwST8RHqMAAAAASUVORK5CYII='} , {name:'Notificacion' , img:'https://w7.pngwing.com/pngs/269/926/png-transparent-comment-message-notification-instagram-ui-icon-thumbnail.png'}, {name:'Perfil',img:'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg'}]

export default function Menu( ) {
  return (
    <div className=' mx-5 mt-12' >
      {
        menu.map((opcion)=>{
            return(
              <div className='flex mb-4' key={opcion}>
    <img src={opcion.img} className='w-8 p-2' alt="" />
      <p className='text-base transition duration-300 ease-in-out hover:text-lg'>{opcion.name}</p>
    </div>
            )
        })
      }
    </div>
  )
}
