export default function FrameMint() { 
    return (
        <div style={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
        <img className="w-96 mb-12 rounded-3xl" src={"/mintcaster_logo.png"} alt="" />
        <h1 className="text-3xl text-black">Like and recast to claim NFT</h1>
        </div>
    );
    };