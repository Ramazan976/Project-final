import React from "react"

const Personal = [
    { id: 1, 
    head: 'Incredible Experience',
    desc: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.',
    name: 'Anya Tailor Joy', 
    special: 'CEO, SF Industires', 
    img: 'src/assets/Photo.png'
    },
    { id: 2, 
    head: 'Dependable, Responsive, Professional Partner',
    desc: 'Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations.',
    name: 'Sri Alam', 
    special: 'CEO, Membagongkan GROP', 
    img: 'src/assets/Photo.png'
    }
]

function Testimonials() {

    return (
               <div className="testimonials">
                   <h1 className="head-1">Clients Testimonial</h1>
                
                <div className="testimonials-card">
            {Personal.map((item) => (
                
                <div className="work" key={item.id}>
                    <div className="worker-text">
                        <h4>{item.head}</h4>
                        <p>{item.desc}</p>
                        <div className="tringle"></div>
                    </div>
                    <div className="worker">
                        <img src={item.img} />
                        <div className="worker-name">
                        <p className="item">{item.name}</p>
                        <p className="special">{item.special}</p>
                        </div>
                    </div>
                </div>

))}
</div>
                </div>
        
 
    )
}
export default Testimonials