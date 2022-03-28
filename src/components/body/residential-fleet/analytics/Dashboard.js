export default function DashBoard () {
    return (
        <div>
            <div className="flex h-96">
                {/* Live Data Feed */}
                <div className="flex-1 border-solid border-2 border-gray-200 m-2 rounded-lg shadow-md shadow-gray-200">
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200">
                        <div className="flex-1 w-1/4"></div>
                        <div>Live Data</div>
                    </div>
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200">
                        <div className="flex-1 w-1/4">
                            <img src="/img/resi-live-grid.png" />    
                        </div>
                        <div className="w-3/4">Grid</div>
                    </div>
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200">
                        <div className="flex-1 w-1/4">
                            <img src="/img/resi-live-solar.png" />
                        </div>
                        <div>Solar | Bypass</div>
                    </div>
                </div>
                {/** Daily Trends */}
                <div className="flex-1 m-2 ">
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200 mx-0 mt-0 rounded-lg shadow-md shadow-gray-200">
                        <img src="/img/home-spend.png" />
                    </div>
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200 mx-0 my-1 rounded-lg shadow-md shadow-gray-200">
                        <img src="/img/home-usage.png" />
                    </div>
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200 mx-0 my-1 rounded-lg shadow-md shadow-gray-200">
                        <img src="/img/home-solar-generation.png" />
                    </div>
                    <div className="flex-1 h-1/4 border-solid border-2 border-gray-200 mx-0 mb-0 rounded-lg shadow-md shadow-gray-200">
                        <img src="/img/resi-live-voltage.png" />
                    </div>
                </div>
                {/** */}
                <div className="flex-1 border-solid border-2 border-gray-200 m-2 rounded-lg shadow-md shadow-gray-200">
                    <div>
                        Last month, you spent $35.56 on electricity. It looks like this month is tracking towards a higher bill.
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/** */}
                <div className="flex-1 m-2">
                    <div className="flex-1 h-1/2 border-solid border-2 border-gray-200 mb-1 rounded-lg shadow-md shadow-gray-200">04</div>
                    <div className="flex-1 h-1/2 border-solid border-2 border-gray-200 mt-1 rounded-lg shadow-md shadow-gray-200">04</div>
                </div>
            </div>
        </div>
    );
}