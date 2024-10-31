

function BOBA({ state }) {
    return (
        <>
            {state && <img src="benjamin-chambon-vRu-Bs27E2M-unsplash.jpg" alt="#" style={{ width: '340px', height: '700px' }} />}
            {!state && <img src="portrait-beautiful-woman_144627-22982.avif" alt="#" style={{ width: '340px', height: '700px' }} />}
        </>
    )
}
export default BOBA;