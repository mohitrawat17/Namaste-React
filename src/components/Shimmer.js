

const Shimmer = () => {
    return (
        <>
            <div  style={{width:"220px", height:"25px"}}>
              
            </div>

            <div data-testid="shimmer">

                {Array(15)  
                    .fill("")
                    .map((item, index) => {
                        return <div key={index} className="card">
                            <div className="loader" style={{ height: "125px" }}></div>
                            <h2 className="loader" style={{ height: "25px" }}></h2>
                            <h3 className="loader" style={{ height: "25px" }}></h3>
                            <h4 className="loader" style={{ height: "25px" }}></h4>
                        </div>;
                    })}
            </div>

        </>
    )
}


export default Shimmer;