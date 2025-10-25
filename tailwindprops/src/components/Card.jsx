
function Card({username="BOB", price=50}) {  // props destructuring with default values
return (
    <div className="w-140  flex flex-col rounded-xl min-h-[19rem] ">
        <div>
            <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
            />
        </div>

    <div className="flex flex-col py-3 px-3 pb-10 bg-black text-white">
        <div className="flex justify-between text-sm">
        <h1 className="text-sm font-bold ">{username}</h1>
        <h1>Price</h1>
        </div>
        <div className="flex  justify-between">
        <p>#345</p>
        <p>Rs. {price}</p>
        </div>
    </div>
    
    </div>
)
}

export default Card