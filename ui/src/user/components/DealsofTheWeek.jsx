import React from "react";

const products = [
    {img: "https://preview.colorlib.com/theme/karma/img/r1.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r2.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r3.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r5.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r6.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r7.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r9.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r10.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
    {img: "https://preview.colorlib.com/theme/karma/img/r11.jpg", name:"BLACK LACE HEELS", price:"$189.00", oldPrice:"$210.00"},
];

const rolexProducts = [
    {img: "	https://preview.colorlib.com/theme/karma/img/category/c5.jpg"},
];


const DealsofTheWeek = () => {
    return (    
        <div className="flex flex-col mb-20 items-center max-h-screen-xl">
            <h1 className="text-3xl font-semibold mb-2">Deals of the Week</h1>
            <p className="text-gray-500">The best deals of week are here! Enjoy big discounts on selected products.</p>

                <div className="flex flex-row justify-center">

            <div className="grid grid-cols-3 justify-center gap-6 mt-20 max-w-screen-xl">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-row gap-3 items-center w-[270px]">
                        <img src={`${product.img}`} 
                            alt={product.name} 
                            />
                        <div className="flex flex-col">
                        <p className="hover:text-amber-500 cursor-pointer">{product.name}</p>
                        <p className="font-medium">{product.price}</p>
                        <p className="line-through text-gray-400">{product.oldPrice}</p>
                        </div> 
                    </div>
                ))}
                </div>
                {rolexProducts.map((product, index) => (
                <div key={index} className=" flex mt-20 h-[300px]">
                    <img src={`${product.img}`} 
                     alt=""/>
                </div>    
                ))}
                
            </div>
        </div>
    )
}
export default DealsofTheWeek;